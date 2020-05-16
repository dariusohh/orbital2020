from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

# Create your models here.
class Expense(models.Model):
    username = models.TextField();
    name = models.TextField();
    amount = models.TextField();
    
    class Meta:
        ordering = ['-id']
