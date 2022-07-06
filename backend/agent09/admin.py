from django.contrib import admin

# Register your models here.
from . models import Agent09
 
# Register your models here.
class Agent09Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent09, Agent09Admin)

