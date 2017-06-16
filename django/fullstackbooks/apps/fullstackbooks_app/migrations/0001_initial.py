# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-26 14:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('author', models.CharField(max_length=35)),
                ('published_date', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=35)),
            ],
        ),
    ]
