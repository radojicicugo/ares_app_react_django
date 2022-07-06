from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Jeremic
from . serializer import JeremicSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class JeremicView(viewsets.ModelViewSet):
    queryset = Jeremic.objects.all()
    serializer_class = JeremicSerializer
   
