# Generated by Django 3.0.6 on 2020-06-15 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('username', models.TextField(db_index=True, primary_key=True, serialize=False, unique=True)),
                ('image', models.ImageField(upload_to='post_images')),
            ],
        ),
    ]
