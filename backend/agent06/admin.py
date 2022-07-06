from django.contrib import admin

# Register your models here.
from . models import Agent06
 
# Register your models here.
class Agent06Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent06, Agent06Admin)

