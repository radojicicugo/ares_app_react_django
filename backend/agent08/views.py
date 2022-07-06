from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Agent08
from . serializer import Agent08Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent08View(viewsets.ModelViewSet):
    queryset = Agent08.objects.all()
    serializer_class = Agent08Serializer
   
