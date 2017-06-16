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
                error_messages.append("Success! Welcome, " + User.objects.get(email = user_info['email']).first_name + "!")
            else:
                error_messages.append("Unsuccessful login. Incorrect password.")
        else:
            error_messages.append("Unsuccessful login. Your email is incorrect.")
        return error_messages
        
        


    def register(self, user_info):
        error_messages = []
        if not user_info['first_name'].isalpha():
            error_messages.append("First name contains non-alpha character(s)")
        if len(user_info['first_name']) < 2:
            error_messages.append("First name is not long enough")
        if not user_info['last_name'].isalpha():
            error_messages.append("Last name contains non-alpha character(s)")
        if len(user_info['last_name']) < 2:
            error_messages.append("Last name is not long enough")
        if not user_info['alias'].isalpha():
            error_messages.append("Alias contains non-alpha character(s)")
        if len(user_info['alias']) < 2:
            error_messages.append("Alias is not long enough")
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
            User.objects.create(first_name = user_info['first_name'], last_name = user_info['last_name'], email = user_info['email'], alias= user_info['alias'], password = hashed)
        return error_messages

   

       

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=55)
    alias = models.CharField(max_length=45)
    email = models.CharField(max_length=55)
    password = models.CharField(max_length=20)
    confirm_pw = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Author(models.Model):
    full_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    users = models.ManyToManyField(User, related_name="books")

class Review(models.Model):
    content = models.TextField(max_length=2000)
    stars = models.IntegerField()
    book = models.ForeignKey(Book, related_name="reviews")
    user = models.ForeignKey(User, related_name="reviews")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
