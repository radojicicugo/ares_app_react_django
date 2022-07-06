from django.contrib import admin

# Register your models here.
from . models import Agent05
 
# Register your models here.
class Agent05Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent05, Agent05Admin)

