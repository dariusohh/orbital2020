from django import forms
from .models import Expense

MAX_VALUE_LENGTH = 20

class ExpenseForm(forms.ModelForm):
    class Meta:
        model = Expense
        fields = ["name","amount"]

    def clean_content(self):
        amount = self.cleaned_data.get("amount")
        if len(amount) > MAX_VALUE_LENGTH:
            raise forms.ValidationError("Too much moolah")
        return amount

