from django.db import models

# Create your models here.
from django.db.models import Count, Avg, Sum, Max, Min

# Create your models here.
class Agent05(models.Model):
    prezime = models.CharField(max_length=50, null=False, blank=False)
    dan = models.DateField(null=True)
    pozicija = models.CharField(max_length=40, null=False, blank=False)
    pocetak = models.DateTimeField(null=False)
    zavrsetak = models.DateTimeField(null=False)
    pauza = models.CharField(max_length=5, null=False, blank=False)
    opis = models.TextField()
    sati =  models.FloatField(null=False)
    total =  models.FloatField(null=False)


    def total_sati(self):
        total_sati = Agent05.objects.aggregate(Sum('total'))
        return total_sati
        
    def __str__(self):
        return self.pozicija 

       