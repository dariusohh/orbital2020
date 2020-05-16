"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# from expense.views import home_view, expense_detail_view, expense_list_view, expense_create_view, expense_delete_view
# from account.views import login_view, logout_view, register_view
from expense.views import ExpenseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api',ExpenseViewSet)
urlpatterns = router.urls
urlpatterns += [path('rest_auth/', include('rest_auth.urls')),
                path('rest_auth/register/',include('rest_auth.registration.urls'))
]

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('home/', home_view),
#     path('', login_view),
#     path('logout/', logout_view),
#     path('register/', register_view),
#     path('create-expense/', expense_create_view),
#     path('expense/', expense_list_view),
#     path('expense/<int:expense_id>', expense_detail_view),
#     path('api/tweets/<int:expense_id>/delete', expense_delete_view)
# ]