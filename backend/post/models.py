
from django.db import models

# Create your models here.

class Post(models.Model):
    username = models.TextField(unique = True, db_index = True,primary_key = True)
    image = models.ImageField(upload_to='post_images',blank=True)
    
   