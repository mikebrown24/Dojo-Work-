# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'disappearing_ninja_app/index.html')

def static(request):
    return render(request, 'disappearing_ninja_app/static.html')

def leonardo(request):
    return render(request, 'disappearing_ninja_app/leonardo.html')

def michaelangelo(request):
    return render(request, 'disappearing_ninja_app/michaelangelo.html')

def raphael(request):
    return render(request, 'disappearing_ninja_app/raphael.html')

def donatello(request):
    return render(request, 'disappearing_ninja_app/donatello.html')