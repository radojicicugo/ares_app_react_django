from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Agent09
from . serializer import Agent09Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent09View(viewsets.ModelViewSet):
    queryset = Agent09.objects.all()
    serializer_class = Agent09Serializer
   
