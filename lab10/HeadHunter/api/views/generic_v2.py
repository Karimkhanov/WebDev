from rest_framework import status, mixins, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Company, Vacancy
from ..serializers import VacancySerializerV2, CompanySerializerV2


class GenericCompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializerV2
    # permission_classes = (IsAuthenticated,)

    # def get_queryset(self):
    #     return Company.objects.filter(user=self.request.user)
    #
    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)  # it will be connected with user


class GenericCompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializerV2
    permission_classes = (IsAuthenticated,)  # it will ask auth, to get the data!


class GenericVacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializerV2
