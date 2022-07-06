from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Angelovski
from . serializer import AngelovskiSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class AngelovskiView(viewsets.ModelViewSet):
    queryset =Angelovski.objects.all()
    serializer_class = AngelovskiSerializer
   
