from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("menu/", menu_list),
    path("add-menu/", add_menu),
    path("update-menu/<int:id>/", update_menu),
    path("delete-menu/<int:id>/", delete_menu),
    path("place-order/", place_order),
]