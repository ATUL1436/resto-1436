from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.ImageField(
        upload_to="menu_images/",
        null=True,
        blank=True)
    
class Order(models.Model):
    table_no = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    qty = models.IntegerField()

    def __str__(self):
        return self.name