# BackEnd_Python
- Django
- Flask
- Tornado


## 1. React + Django_Template
- React (见FrontEnd_NodeJS)
- Django_Template / RESTful Django

### (1)RESTful Django
```
# Create Django
    let '...\site-packages\django\bin' joined system path
    above project path> django-admin startproject xxProject
    above project path> cd xxproject
    project path> django-admin startapp xxSite
    create new folder: templates in xxSite
# Run Django
    project path> python manage.py runserver
    project path> python manage.py migrate
    project path> python manage.py createsuperuser
```

## 2.Angular + ExpressGenerator
- Angular / Angular_Template / AngularAntd_Template (见FrontEnd_NodeJS)
  - ng build
- Express Simple / ExpressGenerator / Express_Template (见FrontEnd_NodeJS)
  - node server.js
- MongoDB 
  - \MongoDB\bin>mongod --dbpath \MongoDB\data

## 3.Vue + Flask
- Vue Base / Vue Simple / Vue CLI / Vue Ionic CLI / Vue_Template (见FrontEnd_NodeJS)
  - npm run serve
  - Vue + ionic + Axios + pubsub-js
  - 父子组件/同级组件互相传值
  - 前后端 axios 传值
- Flask Simple / Flask_Template / RESTful Flask
  - python -m flask run
  - get/post 的路由传参/问号传参
  - Virtual Env libs: pip freeze > requirements.txt
  - Dependency libs: pipreqs ./
  - heroku run python xxx
- Deployment
  - Heroku / Nginx / uWSGI

### (1)Flask
```
# Virtual Environment  
Virtual Env libs: pip freeze > requirements.txt  
Dependency libs: pipreqs ./  
  
# Run by development  
Parameters:  
--mode: develop/produce  
--host: default 127.0.0.1  
--port: default 8080  

Method 1) path> set FLASK_APP=manage.py  
          path> flask run  
Method 2) path> python -m flask run  
Method 3) path>python -m flask run --host=0.0.0.0 (all users)  
    
# Deploy by production  
Gunicorn Common 1) gunicorn -w 4 -b 127.0.0.1:4000 myproject:app  
Gunicorn Factory 2) gunicorn "myproject:create_app()"  
uWSGI 1) uwsgi --http 127.0.0.1:5000 --module myproject:app  
twistd 1) twistd -n web --port tcp:8080 --wsgi myproject.app  
Gevent 1) python manage_gevent.py  
  
# Heroku Files (Procfile/Procfile.windows/runtime.txt/.flskenv)  
heroku run python xxx  
```

## 4.Tornado
```
# Development environment:
BEA path > python manage.py  (default port:8000)  
  
# Deployment and produce environment:
BEA path > python manage.py --env=produce  --port=80  (formal port:80)  
  
# All optional parameters   
--port = 8000 [default]  
--env = develop [default] / produce  
--processtype = single [default] / multiple  
--daemon = off [default] / on  
  
# Git Files (.gitatrributes/.gitignore/README.md)  
```