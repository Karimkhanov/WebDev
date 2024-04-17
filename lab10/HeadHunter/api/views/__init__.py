# from .views_first import (get_companies, get_companies_detail, company_vacancies_detail)
# from .views_first import (all_vacancies, top_ten_vacancies, company_vacancies_detail)
from .fbv import get_companies, get_companies_detail, company_vacancies
from .fbv import all_vacancies, company_vacancies_detail, top_ten_vacancies
from .cbv import CompanyListAPIView
# from .generic_v1 import GenericCompanyList, GenericCompanyDetail
from .generic_v2 import GenericCompanyList, GenericCompanyDetail, GenericVacancyList
