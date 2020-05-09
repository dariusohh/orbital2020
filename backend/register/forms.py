from django.forms import ModelForm
from .models import Register

class registerForm(ModelForm):
    class Meta:
        model = Register
        fields = ['customerFirstName','customerLastName','companyName','phone','email','country','password']
