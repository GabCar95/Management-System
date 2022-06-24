from django.urls import path
from .views import CustomerList, CustomerView, MaintenanceUpdate
from . import views




urlpatterns = [

    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name="userProfile"),
    path('users/', views.getUsers, name="users"),

    path('maintenance/', views.getMaintenance, name="getMaintenance"),
    path('maintenance/<int:pk>', MaintenanceUpdate.as_view()),

    path('order/', views.getOrder, name="getOrder"),

    path('customer/', CustomerList.as_view()),
    path('customer/<int:pk>', CustomerView.as_view()),
    
    
    
]
