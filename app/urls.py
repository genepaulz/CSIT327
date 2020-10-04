from django.urls import path
from . import views

app_name = 'app'
urlpatterns = [
    path('',views.LoginView.as_view(),name="login_view"),
    path('dashboard/',views.DashboardView.as_view(),name="dashboard_view"),
    path('products/',views.ProductView.as_view(),name="products_view"),
    path('regproducts/',views.RegisterProductView.as_view(),name="reg_products_view"),
    path('customers/',views.CustomerView.as_view(),name="customers_view"),
    path('regcustomers/',views.RegisterCustomerView.as_view(),name="reg_customers_view"),
]
