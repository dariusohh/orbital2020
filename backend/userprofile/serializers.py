from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["username","company_name","company_industry","company_description","show_public"
                   ,"email","office","tele","ratings"]
