# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'landscapes_app/index.html')

def results(request, param):
   
    context = {
        'param': int(param)
    }
    return render(request, 'landscapes_app/results.html', context)
