from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import get_companies, get_companies_detail, company_vacancies_detail
from .views import company_vacancies, all_vacancies, top_ten_vacancies
from .views import CompanyListAPIView
from .views.cbv import CompanyDetailAPIView
from .views import GenericCompanyList, GenericCompanyDetail, GenericVacancyList

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('companies/', GenericCompanyList.as_view()),
    path('companies/<int:pk>/', GenericCompanyDetail.as_view()),
    # path('companies/<int:pk>/vacancies/', company_vacancies), with g1 and g2
    path('vacancies/', GenericVacancyList.as_view()),
    # path('vacancies/<int:pk>/', company_vacancies_detail),
    # path('vacancies/top_ten/', top_ten_vacancies)


    # path('companies/', CompanyListAPIView.as_view()), with cbv
    # path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    # path('companies/<int:pk>/vacancies/', company_vacancies),
    # path('vacancies/', all_vacancies),
    # path('vacancies/<int:pk>/', company_vacancies_detail),
    # path('vacancies/top_ten/', top_ten_vacancies)

    # path('companies/', get_companies), with fbv
    # path('companies/<int:pk>/', get_companies_detail),
    # path('companies/<int:pk>/vacancies/', company_vacancies),
    # path('vacancies/', all_vacancies),
    # path('vacancies/<int:pk>/', company_vacancies_detail),
    # path('vacancies/top_ten/', top_ten_vacancies)
]
