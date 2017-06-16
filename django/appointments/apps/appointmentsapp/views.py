# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import User, Appointment
from django.core.urlresolvers import reverse
# Create your views here.
def index(request):
    return render(request, 'appointmentsapp/index.html')

def login(request):
    user_info = {
        'email': request.POST['email_log'],
        'password': request.POST['password_log']
    }
    errors = User.objects.login(user_info) 
    if User.objects.login(user_info):
        for i in errors:
            messages.success(request, i)
        return redirect(reverse('show_appointments'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def process(request):
    user_info = {
        'name': request.POST['name'],
        'email': request.POST['email'],
        'password':request.POST['password'],
        'confirm_pass': request.POST['confirm_pass'],
        'date_of_birth': request.POST['date_of_birth'],
    }
    errors = User.objects.register(user_info) #Linking in from User manager!!!!!!!
    if len(errors) == 0:
         messages.success(request, "Welcome, " + user_info['name'] + "!")
         return redirect(reverse('show_appointments'))
    else:
        for error in errors:
            messages.success(request, error)
        return redirect(reverse('index'))

def show_appointments(request):
    
    context = {
        'appointments': Appointment.objects.all(),
    }
    
    return render(request, 'appointmentsapp/appointments.html', context)

def addappointments(request):
    
    return redirect('/show_appointments')

def process_appointments(request):
    appointment_info = {
        'date': request.POST['date'],
        'time': request.POST['time'],
        'tasks': request.POST['tasks'],
        'id': 1
    }

    print appointment_info
    
    apperrors = Appointment.objects.add_appointment(appointment_info)
    if len(apperrors) == 0:
        messages.success(request, "Congrats you've successfully entered your appointment!")
        return redirect('/show_appointments')
    else:
        for a in apperrors:
            messages.success(request, a)
    return redirect('/show_appointments')

# def appointments(request):
#     context = {
#         'appointments': Appointment.objects.all()
#     }
#     return render(request, 'appointmentsapp/appointments.html', context)

def delete_appointments(request, id):
    a = Appointment.objects.get(id = id)
    a.delete()
    messages.success(request, "The appointment is deleted")

    return redirect('/show_appointments')


def logout(request):
    request.session.clear()
    messages.success(request, "Succesfully Logged Out")
    return redirect(reverse('index'))

def update(request, id):
    context = {
        "appointments": User.objects.get(id=id)
    }
    return render(request, 'appointmentsapp/update.html', context)

def update_appointments(request, id):
    updated_appointment = User.objects.get(id=id)
   #you can do this for as many fields as you like
   #here I asume you had a form with input like <input type="text" name="name"/>
   #so it's basically like that for all form fields
    updated_appointment.date = request.POST['date']
    updated_appointment.tasks = request.POST['tasks']
    updated_appointment.time = request.POST['time']
    updated_appointment.save()
    return redirect('/show_appointments')



