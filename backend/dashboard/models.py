from django.db import models

# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.last_name

class Truck(models.Model):
    make =  models.CharField(max_length=100)
    model =  models.CharField(max_length=100)
    year = models.IntegerField()
    vin =  models.CharField(max_length=100, primary_key=True)
    mileage = models.IntegerField()
    customer = models.ForeignKey(Customer, on_delete=models.RESTRICT)
    
    

    def __str__(self):
        return self.vin

class Order(models.Model):
    

    customer = models.ForeignKey(Customer, on_delete=models.RESTRICT)
    truck = models.ForeignKey(Truck, on_delete=models.RESTRICT)
    date_created = models.DateField(auto_now_add=True)
    date_complete = models.DateField(auto_now=False, null=True, blank=True)

   
    

class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    start_date = models.DateField(auto_now=False)
    job_title = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    date_created = models.DateField(auto_now_add=True)
    


    def __str__(self):
        return self.last_name

class Maintenance(models.Model):
   
    STATUS = (
        ('Pending', 'Pending'),
        ('Working', 'Working'),
        ('Waiting Pickup', 'Waiting Pickup'),
        ('Complete', 'Complete'),
    )

       
    
    employee = models.ForeignKey(Employee, on_delete=models.RESTRICT)
    order = models.ForeignKey(Order, on_delete=models.RESTRICT)
    status = models.CharField(max_length=100, choices=STATUS)
    tune = models.BooleanField(default=False)
    description = models.TextField()
    totalCost = models.FloatField(null=True, blank=True)
    paid = models.BooleanField(default=False)
    passInspection = models.BooleanField(default=False)
    truckInShop =  models.DateField(auto_now=False, null=True, blank=True)
    truckOutShop =  models.DateField(auto_now=False, null=True, blank=True)

   
