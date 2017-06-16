# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book

# Create your views here.
def index(request):
    Book.objects.create(title="Power", author="Michael", published_date="January 17, 2017", category="Empowerment")
    Book.objects.create(title="The Alchemist", author="Michael", published_date="January 18, 2017", category="Tales")
    Book.objects.create(title="Think and grow rich", author="Michael", published_date="January 19, 2017", category="Empowerment")
    Book.objects.create(title="Lets go", author="Michael", published_date="January 20, 2017", category="Tales")
    Book.objects.create(title="Watches", author="Michael", published_date="January 21, 2017", category="Entertainment")
    Books = Book.objects.all()
    print Books
    for i in Books:
        print i.title,i.author,i.published_date, i.category
    return render(request, 'booksapp/index.html')


