from django.db import models

# Create your models here.
class UserProfile(models.Model):
    username = models.TextField(unique = True, db_index = True,primary_key = True);
    company_name = models.TextField(blank = True);
    company_industry = models.TextField(blank = True);
    company_description = models.TextField(blank = True);
    show_public = models.BooleanField();