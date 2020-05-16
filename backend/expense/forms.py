from django import forms
from .models import Expense

MAX_VALUE_LENGTH = 20

class ExpenseForm(forms.ModelForm):
    class Meta:
        model = Expense
        fields = ["name","amount"]

