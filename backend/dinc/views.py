from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Dinc
from . serializer import DincSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class DincView(viewsets.ModelViewSet):
    queryset = Dinc.objects.all()
    serializer_class = DincSerializer
   
