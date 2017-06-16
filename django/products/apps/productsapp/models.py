# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField(max_length=1000)
    weight = models.TextField(max_length=20)
    price = models.CharField(max_length=20)
    cost = models.CharField(max_length=20)
    category = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now =True)

