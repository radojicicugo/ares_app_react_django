from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Mario
from . serializer import MarioSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class MarioView(viewsets.ModelViewSet):
    queryset = Mario.objects.all()
    serializer_class = MarioSerializer
   
