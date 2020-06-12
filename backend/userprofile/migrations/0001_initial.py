# Generated by Django 3.0.6 on 2020-06-12 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('username', models.TextField(db_index=True, primary_key=True, serialize=False, unique=True)),
                ('company_name', models.TextField()),
                ('company_description', models.TextField()),
                ('show_public', models.BooleanField()),
            ],
        ),
    ]
