from django.http import JsonResponse

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Company, Vacancy
from ..serializers import VacancySerializer, CompanySerializerV2


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializerV2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializerV2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetailAPIView(APIView):

    def get_object(self, pk=None):
        try:
            companies = Company.objects.get(id=pk)
            return companies
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None):
        companies = self.get_object(pk)
        serializer = CompanySerializerV2(companies)
        return Response(serializer.data)

    def put(self, request, pk=None):
        companies = self.get_object(pk)

        serializer = CompanySerializerV2(
            instance=companies,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        companies = self.get_object(pk)
        companies.delete()
        return Response({"deleted": True})
