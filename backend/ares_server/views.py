from django.shortcuts import render

from django.http import HttpResponse
from . models import Radojicic
from . serializer import RadojicicSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class RadojicicView(viewsets.ModelViewSet):
    queryset = Radojicic.objects.all()
    serializer_class = RadojicicSerializer
   
