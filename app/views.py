from django.shortcuts import render,redirect
from django.views.generic import View,TemplateView
from django.http import HttpResponse
from .models import Admin,Customer,Product
from .forms import adminForm,customerForm,productForm

# Create your views here.


class LoginView(View):
    def get(self,request):
        return render(request,'login.html')
    def post(self,request):
        
        user = request.POST.get("user")        
        password = request.POST.get("pass")
        # print(user)
        # print(password)
        q = Admin.objects.get(username = user)
        if q.password == password:
            return redirect('app:dashboard_view')
        else:
            return HttpResponse("User does not exist!")
        

class DashboardView(View):
    def get(self,request):
        return render(request,'dashboard.html')

class ProductView(View):
    def get(self,request):
        qs = Product.objects.all()
        for product in qs:
            context = {
                'products' : qs
            }
        return render(request,'dproduct.html',context)

class RegisterProductView(View):
    def get(self,request):
        return render(request,'rproduct.html')

    def post(self,request):
        form = productForm(request.POST)
        
        if form.is_valid():
            # try:
            pname = request.POST.get("productname")
            category = request.POST.get("category")
            brand = request.POST.get("brand")
            color = request.POST.get("color")
            size = request.POST.get("size")
            price = request.POST.get("price")
            stocks = request.POST.get("stocks")
            
            form = Product(
                productname = pname, 
                category = category, 
                brand = brand, 
                color = color, 
                size = size, 
                price = price, 
                stocks = stocks
                )
            form.save()

            return HttpResponse('Product Registered')
        else:
            print(form.errors)
            return HttpResponse('Invalid')



class CustomerView(View):
    def get(self,request):
        qs = Customer.objects.all()
        for customer in qs:
            context = {
                'customers' : qs
            }
        return render(request,'dcustomer.html',context)

class RegisterCustomerView(View):
    def get(self,request):
        return render(request,'rcustomer.html')
    def post(self,request):
        form = customerForm(request.POST)
        # email = request.POST.get("email")
        # password = request.POST.get("password")
        # firstname = request.POST.get("firstname")
        # middlename = request.POST.get("middlename")
        # lastname = request.POST.get("lastname")
        # birthday = request.POST.get("birthday")
        # gender = request.POST.get("gender")
        # street = request.POST.get("street")
        # barangay = request.POST.get("barangay")
        # city = request.POST.get("city")
        # province = request.POST.get("province")
        # zipcode = request.POST.get("zipcode")
        # country = request.POST.get("country")
        # print(email)
        # print(password)
        # print(firstname)
        # print(middlename)
        # print(lastname)
        # print(birthday)
        # print(gender)
        # print(street)
        # print(barangay)
        # print(city)
        # print(province)
        # print(zipcode)
        # print(country)
        if form.is_valid():
            email = request.POST.get("email")
            password = request.POST.get("password")
            firstname = request.POST.get("firstname")
            middlename = request.POST.get("middlename")
            lastname = request.POST.get("lastname")
            birthday = request.POST.get("birthday")
            gender = request.POST.get("gender")
            street = request.POST.get("street")
            barangay = request.POST.get("barangay")
            city = request.POST.get("city")
            province = request.POST.get("province")
            zipcode = request.POST.get("zipcode")
            country = request.POST.get("country")

            form = Customer(
                email = email,
                password = password,
                firstname = firstname,
                middlename = middlename,
                lastname = lastname,
                birthday = birthday,
                gender = gender,
                street = street,
                barangay = barangay,
                city = city,
                province = province,
                zipcode = zipcode,
                country = country
            )
            form.save()            
            return HttpResponse('Successfully Registered!')            
        else:
            print(form.errors)
            return HttpResponse('Invalid')