from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Agent06
from . serializer import Agent06Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent06View(viewsets.ModelViewSet):
    queryset = Agent06.objects.all()
    serializer_class = Agent06Serializer
   
