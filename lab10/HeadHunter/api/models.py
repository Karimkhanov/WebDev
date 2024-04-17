from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Company(models.Model):
    DoesNotExist = None
    objects = None
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='companies',
        null=True,
        blank=True
    )

    def to_json(self):
        return {
            "name": self.name,
            "description:": self.description,
            "city": self.city,
            "address": self.address
        }

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'


class Vacancy(models.Model):
    DoesNotExist = None
    objects = None
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, related_name="vacancies", on_delete=models.CASCADE)

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,

        }

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
