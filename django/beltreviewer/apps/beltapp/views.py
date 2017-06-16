# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from .models import User
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    return render(request, 'beltapp/index.html')

def login(request):
    user_info = {
        'email': request.POST['email_log'],
        'password': request.POST['password_log']
    }
    errors = User.objects.login(user_info)
    if User.objects.login(user_info):
        for i in errors:
            messages.success(request, i)
        return redirect(reverse('books'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def process(request):
    user_info = {
        'first_name': request.POST['first_name'],
        'last_name': request.POST['last_name'],
        'alias': request.POST['alias'],
        'email': request.POST['email'],
        'password':request.POST['password'],
        'confirm_pass': request.POST['confirm_pass']
    }
    errors = User.objects.register(user_info)
    if len(errors) == 0:
         messages.success(request, "Welcome, " + user_info['first_name'] + "!")
         return redirect(reverse('books'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def books(request):
    return render(request, 'beltapp/books.html')

def addbooks(request):
    # query for all authors, create a for loop inside of the select tag
    return render(request, 'beltapp/addbooks.html')

def addreview(request):
    return render(request, 'beltapp/addbooks2.html')

def userspage(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'beltapp/users.html', context)

def logout(request):
    request.session.clear()
    messages.success(request, "Succesfully Logged Out")
    return redirect(reverse('index'))

def createbook(request):
    book_info = {
        'title': request.POST['title'],
        'author': request.POST['author'],
    }
    createbooks = Book.objects.info(book_info)
    return redirect('beltapp/addbooks2.html')

def users(request): 
                    
    context = {
        'users': User.objects.all(),
    }
   
    return render(request, 'beltapp/users_show.html', context)

def deleteuser(request, id):
    u = User.objects.get(id = id)
    u.delete()
    messages.success(request, "The user is deleted")

    return redirect('/users_show')

def update(request, id):
    context = {
        "user": User.objects.get(id=id)
    }
    return render(request, 'beltapp/update.html', context)

def edit_user(request, id):
    updated_user = User.objects.get(id=id)
   #you can do this for as many fields as you like
   #here I asume you had a form with input like <input type="text" name="name"/>
   #so it's basically like that for all form fields
    updated_user.first_name = request.POST['first_name']
    updated_user.last_name = request.POST['last_name']
    updated_user.email = request.POST['email']
    updated_user.alias = request.POST['alias']
    updated_user.save()
    return redirect('/users_show')








