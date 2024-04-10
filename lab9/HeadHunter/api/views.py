import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


# Create your views here.
# CRUD => Create / Read / Update / Delete
@csrf_exempt
def get_companies(request):
    # print(request.method)
    if request.method == 'GET':
        companies = Company.objects.all()
        # companies_json = [com.to_json() for com in companies]
        # return JsonResponse(companies_json, safe=False)
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        # print(request.body)  # it prints the data in string format which you provided in Postman
        data = json.loads(request.body)  # converts string to json format
        # print(data)
        company = Company.objects.create(
            name=data.get("name"),
            description=data.get("description"),
            city=data.get("city"),
            address=data.get("address")
        )
        return JsonResponse(company.to_json())

        # return JsonResponse({'ok': 1})  #returns ok:1 if POST method was called


@csrf_exempt
def get_companies_detail(request, pk=None):
    try:
        companies = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(companies)

        return JsonResponse(serializer.data)
        # return JsonResponse(companies.to_json())

    elif request.method == 'PUT':  # Update company with ID=PK
        # return JsonResponse({"ok": 1})
        data = json.loads(request.body)
        companies.name = data.get("name")
        companies.save()
        return JsonResponse(companies.to_json())

    # return JsonResponse({'id': pk}) #returns id of company

    elif request.method == 'DELETE':
        companies.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def company_vacancies(request, pk=None):
    try:
        companies = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    vacancies_json = [p.to_json() for p in companies.vacancies.all()]

    return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def all_vacancies(request, pk=None):
    # print(request.method)
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        # companies_json = [com.to_json() for com in companies]
        # return JsonResponse(companies_json, safe=False)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        # print(request.body)  # it prints the data in string format which you provided in Postman
        data = json.loads(request.body)  # converts string to json format
        # print(data)
        vacancies = Vacancy.objects.create(
            name=data.get("name"),
            description=data.get("description"),
            city=data.get("salary"),

        )
        return JsonResponse(vacancies.to_json())

        # return JsonResponse({'ok': 1})  #returns ok:1 if POST method was called


@csrf_exempt
def company_vacancies_detail(request, pk=None):
    try:
        vacancies = Vacancy.objects.get(id=pk)

    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancies)

        return JsonResponse(serializer.data)

    elif request.method == 'PUT':

        data = json.loads(request.body)
        vacancies.name = data.get("name")
        vacancies.save()
        return JsonResponse(vacancies.to_json())

    elif request.method == 'DELETE':
        vacancies.delete()
        return JsonResponse({"deleted": True})


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

