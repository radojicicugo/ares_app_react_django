from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Agent10
from . serializer import Agent10Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent10View(viewsets.ModelViewSet):
    queryset = Agent10.objects.all()
    serializer_class = Agent10Serializer
   
