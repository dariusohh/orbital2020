from django.contrib import admin
from django.urls import path, include
from expense.views import ExpenseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api',ExpenseViewSet)
urlpatterns = router.urls
urlpatterns += [path('rest_auth/', include('rest_auth.urls')),
                path('rest_auth/register/',include('rest_auth.registration.urls'))
]
