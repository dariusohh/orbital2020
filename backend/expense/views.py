from .models import Expense
from .serializers import ExpenseSerializer
from rest_framework import viewsets

class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()