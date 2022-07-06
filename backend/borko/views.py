from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from . models import Borko
from . serializer import BorkoSerializer
from rest_framework import viewsets
from django.db.models import Avg, Sum, Min, Max, Count


class BorkoView(viewsets.ModelViewSet):
    queryset = Borko.objects.all()
    serializer_class = BorkoSerializer
   
