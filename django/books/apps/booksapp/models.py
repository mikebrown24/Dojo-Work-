# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=35)
    published_date = models.CharField(max_length=100)
    category = models.CharField(max_length=35)
    in_print = models.BooleanField(default=True)
