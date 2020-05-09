# Generated by Django 3.0.6 on 2020-05-09 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='register',
            name='username',
        ),
        migrations.AddField(
            model_name='register',
            name='companyName',
            field=models.CharField(default='None', max_length=20),
        ),
        migrations.AddField(
            model_name='register',
            name='country',
            field=models.CharField(default='Singapore', max_length=20),
        ),
        migrations.AddField(
            model_name='register',
            name='customerName',
            field=models.CharField(default='Tom', max_length=20),
        ),
        migrations.AddField(
            model_name='register',
            name='email',
            field=models.CharField(default='None', max_length=20),
        ),
        migrations.AddField(
            model_name='register',
            name='phone',
            field=models.CharField(default='None', max_length=20),
        ),
        migrations.AlterField(
            model_name='register',
            name='password',
            field=models.CharField(default='123', max_length=20),
        ),
    ]
