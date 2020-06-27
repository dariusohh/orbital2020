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
    
    def is_valid_input1(self):
        return self.company_name != "" 

    def is_valid_input2(self):
        return self.company_industry !="" 

    def is_valid_input3(self):
        return self.company_description != "" 
    
    def is_valid_input4(self):
        return self.show_public != "" 

    def is_valid_input5(self):
        return self.email != "" 

    def is_valid_input6(self):
        return self.office != ""

    def is_valid_input7(self):
        return self.tele != "" 
    
    def is_valid_input8(self):
        return self.ratings != "" 

    def is_valid_input9(self):
        return self.budget != 0 
    
    def is_valid_input9(self):
        return self.target != 0 

    def is_valid_input10(self):
        return self.achievement != "" 



   
  
