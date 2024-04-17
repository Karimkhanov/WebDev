import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

from ..models import Company, Vacancy
from ..serializers import VacancySerializer, CompanySerializerV2


@api_view(['GET', 'POST'])  # this is decorator can provide http methods
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializerV2(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializerV2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def get_companies_detail(request, pk=None):
    try:
        companies = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializerV2(companies)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializerV2(
            instance=companies,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()  # update table
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        companies.delete()
        return Response({"deleted": True})


@api_view
def company_vacancies(request, pk=None):
    try:
        companies = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

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
