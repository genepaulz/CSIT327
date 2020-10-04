from django import forms
from .models import Product,Customer,Admin

class adminForm(forms.ModelForm):

    class Meta:
        model = Admin
        fields = [
            'username',
            'password',
        ]

class productForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = [
            'productname', 
            'price', 
            'stocks',
            ]

class customerForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = [
            'firstname',
            'lastname',
            'street',
            'barangay',
            'city',
            'province',
            'zipcode',
            'country',
            'email',
            'password',
            ]