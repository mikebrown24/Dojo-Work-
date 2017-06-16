# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import random
VALUES = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

# Create your views here.
def index(request):
    context = {
        "number" : (0,10000)
    }
    return render(request, 'surpriseme_app/index.html', context)

def process(request):
    print(random.choice(VALUES))


def show(request):
    random.shuffle(VALUES)
    return render(request, 'surpriseme_app/show.html')


