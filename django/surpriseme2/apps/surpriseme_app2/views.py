# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
VALUES = ['populate', 'this', 'list', 'with', 'various', 'strings']

# Create your views here.
def index(request):
    return render(request, 'surpriseme_app2/index.html')

def process(request):
    
    random.shuffle(VALUES)
  
    # person types in number > number of items in values
    # person types in a valid number 

   
    #check if number typed in is greater then number of strings
    if int(request.POST['number']) > len(VALUES):
        request.session['surprises'] = VALUES
    else:
        #set array of surprises in session with correct number of strings
        request.session['surprises'] = VALUES[:int(request.POST['number'])]
    return redirect('/result')


def result(request):
    return render(request, 'surpriseme_app2/result.html')
