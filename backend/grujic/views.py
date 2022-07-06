from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Grujic
from . serializer import GrujicSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class GrujicView(viewsets.ModelViewSet):
    queryset = Grujic.objects.all()
    serializer_class = GrujicSerializer
   
