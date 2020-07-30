from django.db import models

# Create your models here.
class UserProfile(models.Model):
    username = models.TextField(unique = True, db_index = True,primary_key = True)
    company_name = models.TextField(blank = True)
    company_industry = models.TextField(blank = True)
    company_description = models.TextField(blank = True)
    show_public = models.BooleanField()
    email = models.TextField(blank = True)
    office = models.TextField(blank = True)
    tele = models.TextField(blank = True)
    ratings = models.IntegerField(blank=True,null = True)
    budget = models.DecimalField(decimal_places = 2, max_digits = 12, blank = True)
    target = models.DecimalField(decimal_places = 2, max_digits = 12, blank = True)
    achievement=models.TextField(blank = True)  
