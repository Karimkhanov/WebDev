from rest_framework import serializers


class CompanySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()


class VacancySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.IntegerField()
