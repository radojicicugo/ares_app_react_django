from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Agent03
from . serializer import Agent03Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent03View(viewsets.ModelViewSet):
    queryset = Agent03.objects.all()
    serializer_class = Agent03Serializer
   
