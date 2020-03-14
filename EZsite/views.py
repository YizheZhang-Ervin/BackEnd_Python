from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.template import loader

from EZsite import models


def index(request):
    # method 1
    # t = loader.get_template('test.html')
    # return HttpResponse(t.render({'name': 123}))

    # method 2    (Template and Context should use together)
    # t = Template('{{name}}')
    # c = Context({'name': 123})
    # return HttpResponse(t.render(c))

    t = loader.get_template('index.html')
    return HttpResponse(t.render())
