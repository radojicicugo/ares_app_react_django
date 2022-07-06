from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Tomo
from . serializer import TomoSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class TomoView(viewsets.ModelViewSet):
    queryset = Tomo.objects.all()
    serializer_class = TomoSerializer
   
