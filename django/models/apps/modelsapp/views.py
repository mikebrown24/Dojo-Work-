# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
from .models import User

# Create your views here.
def index(request):
    print("Running index method, calling out to User.")
    user = User.objects.login("speros@codingdojo.com", "Speros")

    print (type(user))
    if 'error' in user:
        pass
    if 'theuser' in user:
        pass
    return HttpResponse("Done running userManager method. Check your terminal console.")
