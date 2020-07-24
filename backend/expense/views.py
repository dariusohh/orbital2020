from .models import Expense
from .serializers import ExpenseSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .ml_models.predictor import predictor



class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()

@api_view(["POST"])
def predict(request):
    data = request.data
    revenue = list(filter(lambda x:float(x["amount"]) > 0 ,data))
    predicted_revenue = predictor(revenue) if len(revenue) > 1 else []
    expense = list(filter(lambda x:float(x["amount"]) < 0 ,data))
    predicted_expense = predictor(expense) if len(expense) > 1 else []
    return JsonResponse({"revenue_pred":predicted_revenue,"expense_pred": predicted_expense})
