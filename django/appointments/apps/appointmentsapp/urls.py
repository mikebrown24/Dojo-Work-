from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^login$', views.login, name="login"),
    url(r'^process$', views.process, name="process"),
    url(r'^show_appointments$', views.show_appointments, name="show_appointments"),
    url(r'^add_appointments$', views.addappointments, name="addappointments"),
    url(r'^process_appointments$', views.process_appointments, name="process_appointments"),
    url(r'^delete_appointments/(?P<id>\d+)$', views.delete_appointments, name="delete_appointments"),
    url(r'^logout$', views.logout, name="logout"),
    url(r'^update/(?P<id>\d+)$', views.update, name="update"),
    url(r'^update_appointments/(?P<id>\d+)$', views.update_appointments, name="update_appointments"),
]