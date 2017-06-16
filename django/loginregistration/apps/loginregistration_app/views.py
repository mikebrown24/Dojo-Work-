# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import User
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    return render(request, 'loginregistration_app/index.html')

def login(request):
    user_info = {
        'email': request.POST['email_log'],
        'password': request.POST['password_log']
    }
    errors = User.objects.login(user_info)
    if User.objects.login(user_info):
        for i in errors:
            messages.success(request, i)
        return redirect(reverse('success'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def process(request):
    user_info = {
        'first_name': request.POST['first_name'],
        'last_name': request.POST['last_name'],
        'email': request.POST['email'],
        'password':request.POST['password'],
        'confirm_pass': request.POST['confirm_pass']
    }
    errors = User.objects.register(user_info)
    if len(errors) == 0:
         messages.success(request, "Success! Welcome, " + user_info['first_name'] + "!")
         return redirect(reverse('success'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def success(request):
    return render(request, 'loginregistration_app/success.html')