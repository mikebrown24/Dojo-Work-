# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import bcrypt
import re

EMAIL_REGEX = re.compile (r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def login(self, user_info):
        error_messages = []
        if User.objects.filter(email = user_info['email']):
            hashed = User.objects.get(email = user_info['email']).password
            hashed = hashed.encode('utf-8')
            password = user_info['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                error_messages.append("Success! Welcome, " + User.objects.get(email = user_info['email']).name + "!")
            else:
                error_messages.append("Unsuccessful login. Incorrect password.")
        else:
            error_messages.append("Unsuccessful login. Your email is incorrect.")
        return error_messages
        
        


    def register(self, user_info):
        error_messages = []
        if not user_info['name'].isalpha():
            error_messages.append("First name contains non-alpha character(s)")
        if len(user_info['name']) < 2:
            error_messages.append("First name is not long enough")
        if not EMAIL_REGEX.match(user_info['email']):
            error_messages.append("Email is not in valid format")
        if len(user_info['password']) <= 8:
            error_messages.append("Password is not long enough")
        if user_info['password'] != user_info['confirm_pass']:
            error_messages.append("Passwords do not match")
        if User.objects.filter(email=user_info['email']):
            error_messages.append("Email is already in our database")
        if len(error_messages) == 0:
            hashed = bcrypt.hashpw(user_info['password'].encode(), bcrypt.gensalt())
            User.objects.create(name = user_info['name'], email = user_info['email'],date_of_birth=user_info['date_of_birth'], password = hashed)
        return error_messages

class AppointmentManager(models.Manager):
    def add_appointment(self, appointment_info):
        error_messages2 = []
        # if not appointment_info['date'].strptime():
        #     error_messages2.append("Invalid Date")
        # if not appointment_info['time'].strptime():
        #     error_messages2.append("Invalid Time")
        if not appointment_info['tasks'].isalpha():
            error_messages2.append("Tasks contain non-alpha character(s)")
        if len(error_messages2) == 0:
            user = User.objects.get(id=appointment_info['id'])
            Appointment.objects.create(date=appointment_info['date'], time=appointment_info['time'], tasks=appointment_info['tasks'], user = user)
        return error_messages2

class User(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=55)
    password = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    tasks = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    objects = AppointmentManager()
 
    


