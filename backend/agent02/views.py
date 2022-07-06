from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Agent02
from . serializer import Agent02Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent02View(viewsets.ModelViewSet):
    queryset = Agent02.objects.all()
    serializer_class = Agent02Serializer
   
