from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from .models import Expense
from .forms import ExpenseForm
from .serializers import ExpenseSerializer
from rest_framework import viewsets


# Create your views here.
# def home_view(request):
#     return render(request, "pages/home.html",context = {}, status = 200)

# @api_view(['POST'])
# @authentication_classes([SessionAuthentication])
# @permission_classes([IsAuthenticated])
# def expense_create_view(request):
#     serializer = ExpenseSerializer(data= request.POST)
#     if serializer.is_valid(raise_exception = True):
#         serializer.save(user = request.user)
#         return Response(serializer.data, status = 201)
#     return Response({}, status = 400)

# @api_view(['GET'])
# def expense_list_view(request):
#     queryset = Expense.objects.all()
#     serializer = ExpenseSerializer(queryset,many = True)
#     return Response(serializer.data, status = 201)
   
# @api_view(['GET'])
# def expense_detail_view(request, expense_id):
#     queryset = Expense.objects.filter(id = expense_id)
#     if not queryset.exists():
#         return Response({},status = 404)
#     obj = queryset.first()
#     serializer = ExpenseSerializer(obj)
#     return Response(serializer.data,status = 200)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def expense_delete_view(request, expense_id):
#     queryset = Expense.objects.filter(id = expense_id)
#     if not queryset.exist():
#         return Response({}, status = 404)
#     obj = queryset.first()
#     obj.delete()
#     return Response({"message": "Expense removed"}, status = 200)


class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()