from django.http import JsonResponse
from django.views import View
from api.models import Product, Category


def get_products(request):
    # print(request.method) show us a method when we send get method in postman
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)


class ProductView(View):

    def get_products(self, request):
        # print(request.method) show us a method when we send get method in postman
        products = Product.objects.all()
        products_json = [product.to_json() for product in products]

        return JsonResponse(products_json, safe=False)


def get_products_details(request, pk=None):
    # return JsonResponse({'id': pk}) this is just returning id
    try:
        products = Product.objects.get(id=pk)
        return JsonResponse(products.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def get_category(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]

    return JsonResponse(categories_json, safe=False)


#
# class CategoryView(View):
#     def get(self, request):
#         categories = [category.to_json() for category in Category.objects.all()]
#         data = {
#             'categories': categories
#         }
#         return JsonResponse(data, status=200)
#
#
def get_category_details(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def get_category_products_view(request, pk=None):
    products = [product.to_json() for product in Product.objects.filter(category_id=pk)]

    return JsonResponse(products, safe=False)
