# TMPL_Django_Flask_Tornado  
  
## 1.RESTful Django
### Create Django
    let '...\site-packages\django\bin' joined system path
    above project path> django-admin startproject xxProject
    above project path> cd xxproject
    project path> django-admin startapp xxSite
    create new folder: templates in xxSite
### Run Django
    project path> python manage.py runserver
    project path> python manage.py migrate
    project path> python manage.py createsuperuser

## 2.Tornado
常规flask用法的模板

## 3.Flask
常规flask用法的模板，不需要前后端传值  
  
### Features   
Gold Analysis  
单app.py拆分为多个文件  
form模板  
  
## 4.RESTful Flask
Flask Restful用法的模板，需要前后端传值  
  
### Features   
get动态路由传值  
get问号路由参数传值  
post传值  
  
## Flask Related Notes  
  
### Virtual Environment  
Virtual Env libs: pip freeze > requirements.txt  
Dependency libs: pipreqs ./  
  
### Run by development  
Parameters:  
--mode: develop/produce  
--host: default 127.0.0.1  
--port: default 8080  

Method 1) path> set FLASK_APP=manage.py  
          path> flask run  
Method 2) path> python -m flask run  
Method 3) path>python -m flask run --host=0.0.0.0 (all users)  
    
### Deploy by production  
Gunicorn Common 1) gunicorn -w 4 -b 127.0.0.1:4000 myproject:app  
Gunicorn Factory 2) gunicorn "myproject:create_app()"  
uWSGI 1) uwsgi --http 127.0.0.1:5000 --module myproject:app  
twistd 1) twistd -n web --port tcp:8080 --wsgi myproject.app  
Gevent 1) python manage_gevent.py  
  
### Heroku Files (Procfile/Procfile.windows/runtime.txt/.flskenv)  
heroku run python xxx  
  
## Tornado  
### Development environment:
BEA path > python manage.py  (default port:8000)  
  
### Deployment and produce environment:
BEA path > python manage.py --env=produce  --port=80  (formal port:80)  
  
### All optional parameters   
--port = 8000 [default]  
--env = develop [default] / produce  
--processtype = single [default] / multiple  
--daemon = off [default] / on  
  
## Git Files (.gitatrributes/.gitignore/README.md)  
  