from django.contrib import admin

# Register your models here.
from .models import Expense

class ExpenseAdmin(admin.ModelAdmin):
    class Meta:
        model = Expense

admin.site.register(Expense, ExpenseAdmin)

