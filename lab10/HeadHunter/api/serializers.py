from rest_framework import serializers

from .models import Company, Vacancy


class CompanySerializerV1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)  # id won't be required
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        print(validated_data)  # depending to validated data it creates a new object
        instance = Company.objects.create(
            name=validated_data.get("name"),
            description=validated_data.get("description"),
            city=validated_data.get("city"),
            address=validated_data.get("address")
        )
        """this fields will be in Postman, 
        for example if you remove 'city' from this line in Postman it will be empty"""
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance


class VacancySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.IntegerField()


class CompanySerializerV2(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=5)
    # we can also change the data before Posting it, despite in the Model.py will be another max_length
    class Meta:
        model = Company  # this extends from our Company model like(id,name...)
        fields = '__all__'


class VacancySerializerV2(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=5)
    # we can also change the data before Posting it, despite in the Model.py will be another max_length
    class Meta:
        model = Vacancy  # this extends from our Company model like(id,name...)
        fields = '__all__'
