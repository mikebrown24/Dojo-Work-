from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^login$', views.login, name="login"),
    url(r'^process$', views.process, name="process"),
    url(r'^books$', views.books, name="books"),
    url(r'^books/add$', views.addbooks, name="add"),
    url(r'^books/addreview$', views.addreview, name="addreview"),
    url(r'^users/(?P<id>\d+)$', views.userspage, name="userspage"),
    url(r'^logout$', views.logout, name="logout"),
    url(r'^createbook$', views.createbook, name="createbook"),
    url(r'^users_show$', views.users, name="users_show"),
    url(r'^deleteuser/(?P<id>\d+)$', views.deleteuser, name="deleteuser"),
    url(r'^update/(?P<id>\d+)/$',views.update, name="update"),
    url(r'^edit_user/(?P<id>\d+)$', views.edit_user, name="edit_user"),
]