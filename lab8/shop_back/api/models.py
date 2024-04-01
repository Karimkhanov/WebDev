from django.db import models


# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()


class Category(models.Model):
    name = models.CharField(max_length=255)
