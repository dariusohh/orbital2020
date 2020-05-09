from django.db import models

# Create your models here.
class Login(models.Model):
    username = models.TextField()
    password = models.TextField()