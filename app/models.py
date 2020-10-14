from django.db import models
from datetime import datetime

# Create your models here.

class Admin(models.Model):
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length = 50)

    class Meta:
        db_table = "Admins"

class Product(models.Model):
    dateregistered = models.DateField(auto_now=True)
    productname = models.CharField(max_length = 100)
    category = models.CharField(max_length = 100)
    brand = models.CharField(max_length = 50)
    color = models.CharField(max_length = 30)
    size = models.CharField(max_length = 20)
    price = models.CharField(max_length = 50)
    stocks = models.IntegerField()
    deleted = models.IntegerField(max_length=1,default=0)    

    class Meta:
        db_table = "Product"

class Person(models.Model):
    firstname = models.CharField(max_length = 50)
    middlename = models.CharField(max_length = 50, null= True)
    lastname = models.CharField(max_length = 50)
    birthday = models.DateField()
    gender = models.CharField(max_length = 9)
    street = models.CharField(max_length = 150)
    barangay = models.CharField(max_length = 150)
    city = models.CharField(max_length = 150)
    province = models.CharField(max_length = 150)
    zipcode = models.IntegerField()
    country = models.CharField(max_length = 150)
    class Meta:
        db_table = "Person"

class Customer(Person):    
    dateregistered = models.DateField(auto_now=True)
    email = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)
    deleted = models.IntegerField(max_length=1,default=0)

    class Meta:
        db_table = "Customer"

class Buy(models.Model):
    customerid = models.IntegerField()
    productid = models.IntegerField()
    quantity = models.IntegerField()

    class Meta:
        db_table = "Buy"