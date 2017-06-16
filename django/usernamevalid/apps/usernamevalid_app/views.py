# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Username

# Create your views here.
def index(request):
    return render(request, 'usernamevalid_app/index.html')

def check(request):
    if request.method == "POST":
        username = request.post['username']
        if len(username) > 8:
            redirect('/success')
        elif len(username) < 16:
            redirect('/success')
    else:
        print "USERNAME IS NOT VALID!!!"

def success(request):
    context = {
        'allusers': Username.objects.all()
    }
    return render(request, 'usernamevalid_app/success.html', context)
