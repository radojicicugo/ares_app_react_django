from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Vane
from . serializer import VaneSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class VaneView(viewsets.ModelViewSet):
    queryset = Vane.objects.all()
    serializer_class = VaneSerializer
   
