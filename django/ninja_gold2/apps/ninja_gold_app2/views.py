# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0

    if 'log' not in request.session:
        request.session['log'] = []

    print request.session['log']

    return render(request, 'ninja_gold_app2/index.html')

def process(request):
    print request.POST['building']
    if request.POST['building'] == "farm":
        number = random.randint(10,20)
        request.session['count'] = request.session['count'] + number

        
        request.session['log'].append("Earned " + str(number) + " gold from the farm! " + str(datetime.datetime.now()))

    if request.POST['building'] == "cave":
        number = random.randint(5,10)
        request.session['count'] = request.session['count'] + number

        request.session['log'].append("Earned " + str(number) + " gold from the cave! " + str(datetime.datetime.now()))

    if request.POST['building'] == "house":
        number = random.randint(2,5)
        request.session['count'] = request.session['count'] + number

        request.session['log'].append("Earned " + str(number) + " gold from the house! " + str(datetime.datetime.now()))

    if request.POST['building'] == "casino":
        number = random.randint(-50,50)
        request.session['count'] = request.session['count'] + number

        if number < 0:
            request.session['log'].append("Lost " + str(number) + " gold from the casino! " + str(datetime.datetime.now()))
        else:
            request.session['log'].append("Earned " + str(number) + " gold from the casino! " + str(datetime.datetime.now()))
    
    return redirect('/')

def reset(request):
    request.session['count'] = 0
    request.session['log'] = []
    return redirect('/')
