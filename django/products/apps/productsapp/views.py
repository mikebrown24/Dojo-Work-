# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from.models import Product

# Create your views here.
def index(request):
    Product.objects.create(name="Michael Brown")
    Product.objects.create(price="3000")
    Product.objects.create(description="Blah blah blah blah hello hello hello")
    product = Product.objects.all()
    print product
    return render(request, 'productsapp/index.html')

