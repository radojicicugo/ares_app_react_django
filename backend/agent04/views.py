from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Agent04
from . serializer import Agent04Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent04View(viewsets.ModelViewSet):
    queryset = Agent04.objects.all()
    serializer_class = Agent04Serializer
   
