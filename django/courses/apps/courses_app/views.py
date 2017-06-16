# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):
    context = {
        "courses" : Course.objects.all()
    }
    Course.objects.create(course_name= "How to run a business", description="It's not personal, it's strictly business.")
    Course.objects.create(course_name= "How to invent", description="Develop a gameplan, and bring it to an investor.")
    Course.objects.create(course_name= "How to buy the right pair of sneakers", description="Go online and do research")
    Course.objects.create(course_name= "How to spread love to everyone", description="Eliminate all hate in your heart")

    return render(request, 'courses_app/index.html', context)

def addcourse(request):
    Course.objects.create(course_name=request.POST['course_name'], description=request.POST['description'])
    return redirect('/')

def removecourse(request):
    context = {
        "course": Course.objects.get(id=id)
    }
    return render(request, 'courses_app/remove.html', context)

def removethis(request):
    this = Course.objects.get(id=id)
    this.delete()
    return redirect('/')

    



