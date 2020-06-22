from django.contrib import admin
from django.urls import path, include
from expense.views import ExpenseViewSet
from userprofile.views import UserProfileViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from post.views import PostView
from expense.views import predict


router = DefaultRouter()
router.register(r'api',ExpenseViewSet)
router.register(r'profile',UserProfileViewSet)
router.register(r'image',PostView)
urlpatterns = router.urls
urlpatterns += [path('rest_auth/', include('rest_auth.urls')),
                path('rest_auth/register/',include('rest_auth.registration.urls')),
                path('predict/',predict)
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
