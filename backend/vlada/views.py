from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Vlada
from . serializer import VladaSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class VladaView(viewsets.ModelViewSet):
    queryset = Vlada.objects.all()
    serializer_class = VladaSerializer
   
