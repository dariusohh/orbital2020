from django.db import models

# Create your models here.
class Register(models.Model):   
    customerFirstName = models.CharField(max_length = 20)
    customerLastName = models.CharField(max_length = 20)
    companyName = models.CharField(max_length = 20)
    phone = models.CharField(max_length = 8) #country code?
    email = models.EmailField()
    country = models.CharField(max_length = 20) #change to dropdown menu
    password = models.CharField(max_length = 20) #add security feature
    


