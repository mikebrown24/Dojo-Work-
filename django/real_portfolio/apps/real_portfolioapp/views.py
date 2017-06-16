# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'real_portfolioapp/index.html')

def projects(request):
    return render(request, 'real_portfolioapp/projects.html')

def aboutme(request):
    return render(request, 'real_portfolioapp/aboutme.html')

def testimonials(request):
    return render(request, 'real_portfolioapp/testimonials.html')
