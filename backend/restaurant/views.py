from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Menu, Order, OrderItem
import json

@csrf_exempt
def menu_list(request):
    data = list(Menu.objects.values())
    return JsonResponse(data, safe=False)

@csrf_exempt
def add_menu(request):
    if request.method == "POST":
        Menu.objects.create(
            name=request.POST.get("name"),
            price=request.POST.get("price"),
            image=request.FILES.get("image"),
        )
        return JsonResponse({"status": "created"})
    
@csrf_exempt
def update_menu(request, id):
    if request.method == "POST":
        menu = Menu.objects.get(id=id)
        menu.name = request.POST.get("name")
        menu.price = request.POST.get("price")
        if request.FILES.get("image"):
            menu.image = request.FILES.get("image")
        menu.save()
        return JsonResponse({"status": "updated"})

@csrf_exempt
def delete_menu(request, id):
    if request.method == "DELETE":
        Menu.objects.filter(id=id).delete()
        return JsonResponse({"status": "deleted"})


@csrf_exempt
def place_order(request):
    if request.method == "POST":
        data = json.loads(request.body)

        order = Order.objects.create(
            table_no=data["table_no"]
        )

        for item in data["items"]:
            OrderItem.objects.create(
                order=order,
                menu_id=item["menu_id"],
                qty=item["qty"]
            )

        return JsonResponse({"status": "order_sent"})









# @csrf_exempt
# def add_menu(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         price = request.POST.get("price")
#         image = request.FILES.get("image")
        
#         Menu.objects.create(
#             name=name,
#             price=price,
#             image=image)
        
#         return JsonResponse({"status":"success",
#                              "message":"Menu item added successfully"})
    
#     return JsonResponse({"error": "Invalid request"}, status=400)

# def menu_list(request):
#     """
#     PURPOSE:
#     Customer ला menu list दाखवणे
#     """

#     if request.method != "GET":
#         return JsonResponse(
#             {"error": "Only GET method allowed"},
#             status=405
#         )

#     menu = list(Menu.objects.values())

#     return JsonResponse(menu, safe=False)
