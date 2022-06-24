
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .models import *
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView 


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
      

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user    
    user_serializer = UserSerializer(user, many=False)
    return Response(user_serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()  
    employees = Employee.objects.all()

    user_serializer = UserSerializer(users, many=True)
    employee_serializer = EmployeeSerializer(employees, many=True)
    return Response(user_serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMaintenance(request):
    maintenance = Maintenance.objects.all()
    maintenance_serializer = MaintenanceSerializer(maintenance, many=True)
    return Response(maintenance_serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrder(request):
    order = Order.objects.all()
    order_serializer = OrderSerializer(order, many=True)
    return Response(order_serializer.data)



class CustomerList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    


class CustomerView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerViewSerializer

    def get_queryset(self):
        return Customer.objects.filter()

class MaintenanceUpdate(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MaintenanceUpdateSerializer

    def get_queryset(self):
        return Maintenance.objects.filter()


    
   









