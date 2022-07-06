from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Agent01
from . serializer import Agent01Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent01View(viewsets.ModelViewSet):
    queryset = Agent01.objects.all()
    serializer_class = Agent01Serializer
   
