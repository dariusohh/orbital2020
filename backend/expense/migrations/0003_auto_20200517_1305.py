# Generated by Django 3.0.6 on 2020-05-17 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expense', '0002_auto_20200517_1249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]