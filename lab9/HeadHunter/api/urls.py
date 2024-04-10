from django.urls import path

from .views import get_companies, get_companies_detail, company_vacancies, company_vacancies_detail, top_ten_vacancies, \
    all_vacancies

urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:pk>/', get_companies_detail),
    path('companies/<int:pk>/vacancies/', company_vacancies),
    path('vacancies/', all_vacancies),
    path('vacancies/<int:pk>/', company_vacancies_detail),
    path('vacancies/top_ten/', top_ten_vacancies)
]
