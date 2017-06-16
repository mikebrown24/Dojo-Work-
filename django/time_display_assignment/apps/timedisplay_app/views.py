# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from datetime import datetime


# Create your views here.

def index(request):
    date = datetime.now().date()
    time = datetime.now().time()
    context = {
        'datetime' : [
            {'date': date},
            {'time': time},
        ]
    }
    return render(request, 'timedisplay_app/index.html', context)

