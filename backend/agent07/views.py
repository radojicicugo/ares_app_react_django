from django.shortcuts import render

# Create your views here.
# Create your views here.
from django.http import HttpResponse
from . models import Agent07
from . serializer import Agent07Serializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class Agent07View(viewsets.ModelViewSet):
    queryset = Agent07.objects.all()
    serializer_class = Agent07Serializer
   
