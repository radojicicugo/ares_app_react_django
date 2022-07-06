from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Agent05
from . serializer import Agent05Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent05View(viewsets.ModelViewSet):
    queryset = Agent05.objects.all()
    serializer_class = Agent05Serializer
   
