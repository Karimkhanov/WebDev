from django.contrib import admin

from .models import Company, Vacancy


# Register your models here.

# admin.site.register(Company)


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'name')
    search_fields = ('name', 'city', 'address')


# admin.site.register(Vacancy)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'salary')
    search_fields = ('name', 'company', 'salary')
