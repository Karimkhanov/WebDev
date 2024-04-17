from rest_framework import status, mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Company, Vacancy
from ..serializers import VacancySerializer, CompanySerializerV2


class GenericCompanyList(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         generics.GenericAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializerV2

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class GenericCompanyDetail(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializerV2

    def get(self, request, pk=None):
        return self.retrieve(request, pk)

    def put(self, request, pk=None):
        return self.update(request, pk)

    def delete(self, request, pk=None):
        return self.destroy(request, pk)
