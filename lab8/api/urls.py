from django.urls import path

from api.views import get_products, get_products_details, get_category, get_category_details, get_category_products_view

urlpatterns = [
    path("products/", get_products),
    path("products/<int:pk>/", get_products_details),
    path("category/", get_category),
    path('category/<int:pk>', get_category_details),
    path('category/<int:pk>/products', get_category_products_view),
]
