# Generated by Django 3.0.6 on 2020-06-13 08:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0004_auto_20200613_0829'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='phone',
            new_name='contact',
        ),
    ]