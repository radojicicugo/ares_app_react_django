from django.contrib import admin

# Register your models here.
from . models import Agent07
 
# Register your models here.
class Agent07Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent07, Agent07Admin)

