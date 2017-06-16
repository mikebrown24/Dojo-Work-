from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas$', views.static),
    url(r'^ninjas/blue$', views.leonardo),
    url(r'^ninjas/orange$', views.michaelangelo),
    url(r'^ninjas/red$', views.raphael),
    url(r'^ninjas/purple$', views.donatello),
]