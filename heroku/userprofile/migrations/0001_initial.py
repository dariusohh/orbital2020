# Generated by Django 3.0.6 on 2020-06-26 06:55

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
                ('company_name', models.TextField(blank=True)),
                ('company_industry', models.TextField(blank=True)),
                ('company_description', models.TextField(blank=True)),
                ('show_public', models.BooleanField()),
                ('email', models.TextField(blank=True)),
                ('office', models.TextField(blank=True)),
                ('tele', models.TextField(blank=True)),
                ('ratings', models.IntegerField(blank=True, null=True)),
                ('budget', models.DecimalField(blank=True, decimal_places=2, max_digits=12)),
                ('target', models.DecimalField(blank=True, decimal_places=2, max_digits=12)),
                ('achievement', models.TextField(blank=True)),
            ],
        ),
    ]
