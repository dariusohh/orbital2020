from django.contrib import admin
from django.urls import path, include, re_path
from expense.views import ExpenseViewSet
from expense.views import predict
from userprofile.views import UserProfileViewSet
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'api',ExpenseViewSet)
router.register(r'profileapi',UserProfileViewSet)
urlpatterns = [path('',TemplateView.as_view(template_name='index.html'))]
urlpatterns += router.urls
urlpatterns += [path('rest_auth/', include('rest_auth.urls')),
                path('rest_auth/register/',include('rest_auth.registration.urls')),
                path('predictapi/',predict),
                re_path('.*', TemplateView.as_view(template_name='index.html'))
]

