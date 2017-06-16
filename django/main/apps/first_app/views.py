# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
  return render(request, 'first_app/index.html')

def show(request):
    print (request.method)
    return render(request, 'first_app/show_users.html')

def create(request):
    print (request.method)
    if request.method == "POST":
      print ('*' * 50)
      print (request.POST)
      print ('*' * 50)
      request.session['name'] = request.POST['first_name']
      return redirect('/')
    else:
      return redirect('/')

