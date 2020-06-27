from django.test import TestCase
from userprofile.models import UserProfile

class TestModels(TestCase):
    def setUp(self):
        UserProfile.objects.create(
            username =  "test-1",
            company_name = "google",
            company_industry = "media",
            company_description = "search engine",
            show_public = True,
            email = "google@gmail.com",
            office = "google",
            tele = "67745324",
            ratings = 1,
            budget = 4455,
            target = 5566,
            achievement="awards")

        UserProfile.objects.create(
            username =  "test-2",
            company_name = "google2",
            company_industry = "media2",
            company_description = "search engine2",
            show_public = True,
            email = "google2@gmail.com",
            office = "google2",
            tele = "68745324",
            ratings = 1,
            budget = 44550,
            target = 55660,
            achievement="awards2")
            

    def test_is_valid1(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input1(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input1(),True)


    def test_is_valid2(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input2(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input2(),True)

    def test_is_valid3(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input3(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input3(),True)

    def test_is_valid4(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input4(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input4(),True)

    def test_is_valid5(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input5(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input5(),True)

    def test_is_valid6(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input6(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input6(),True)

    def test_is_valid7(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input7(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input7(),True)

    def test_is_valid8(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input8(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input8(),True)

    def test_is_valid9(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input9(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input9(),True)

    def test_is_valid10(self):
        self.assertEquals(UserProfile.objects.get(username="test-1").is_valid_input10(),True)
        self.assertEquals(UserProfile.objects.get(username="test-2").is_valid_input10(),True)

   
