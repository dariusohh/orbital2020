from django.db import models
from django.conf import settings
from django.utils import timezone

User = settings.AUTH_USER_MODEL

# Create your models here.
class Expense(models.Model):
    username = models.TextField();
    name = models.TextField();
    amount = models.DecimalField(max_digits=8, decimal_places=2);
    created_at = models.DateTimeField( default= timezone.now, null=False)
    
    class Meta:
        ordering = ['-created_at']
