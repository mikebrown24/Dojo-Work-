1. Start the environment (djangoEnv). 
    Type in source djangoEnv/Scripts/activate

2. Navigate to a location where you want to create the project (django)

3. django-admin startproject <the project name you want>

4. Navigate into the directory you have just created.
    cd <project name you just made>
    mkdir apps
    cd apps

5. Create the __init__.py file. 
    touch __init__.py (while in the directory apps)

6. python ../manage.py start app <whatever you want to name the app>

7. In settings.py, add 'apps.<name of app>', to the list of INSTALLED_APPS

8. Open urls.py. Make it look like this. 
    from django.conf.urls import url, include
    from django.contrib import admin
    urlpatterns = [
        url(r'^', include('apps.<app name>.urls'))
    ]

9. Our apps urls file does not exist. Make it
    cd apps
    cd <app name> 
    touch urls.py

10. Open urls.py 
    from django.conf.urls import url
    from . import views
    urlpatterns = [
        url(r'^$', views.index)
    ]

11. Build our first function inside of our views file. 
    def index(request):
        return render(request, '<app name>/index.html')

12. Create templates, <app name> inside of templates, add the index.html file.


