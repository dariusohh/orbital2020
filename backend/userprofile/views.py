from .models import UserProfile
from .serializers import UserProfileSerializer
from rest_framework import viewsets

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()