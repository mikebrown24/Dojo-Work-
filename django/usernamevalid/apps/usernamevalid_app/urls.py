from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^$', views.check),
    url(r'^success$', views.success),
]