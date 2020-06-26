from django.test import TestCase
from expense.models import Expense

class TestModels(TestCase):
    def setUp(self):
        Expense.objects.create( username='test-1',
            name='category-1',
            amount=-10000)
        Expense.objects.create( username='test-2',
            name='category-2',
            amount=10000)


    def test_is_expense(self):
        self.assertEquals(Expense.objects.get(username="test-1").is_expense(),True)
        self.assertEquals(Expense.objects.get(username="test-2").is_expense(),False)

    def test_is_revenue(self):
        self.assertEquals(Expense.objects.get(username="test-1").is_revenue(),False)
        self.assertEquals(Expense.objects.get(username="test-2").is_revenue(),True)


    def test_is_name_valid(self):
        self.assertEquals(Expense.objects.get(username="test-1").is_valid_name(),True)
        self.assertEquals(Expense.objects.get(username="test-2").is_valid_name(),True)
