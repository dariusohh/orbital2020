# Generated by Django 3.0.6 on 2020-05-16 15:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('expense', '0003_expense_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expense',
            name='username',
        ),
    ]
