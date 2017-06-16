# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random

# Create your views here.
def index(request):
    return render(request, 'ninja_gold_app/index.html')
    if request.POST['building'] == "farm"
        random_num = random.randint(10,20)
    return redirect('/')
    
    if request.POST['building'] == "cave"
        random.randint(5,10)
    return redirect('/')

    if request.POST['building'] == "house"
        random.randint(2,5)
    return redirect('/')

    if request.POST['building'] == "casino"
        random.randint(-50,50)
    return redirect('/')

    
   