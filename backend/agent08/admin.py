from django.contrib import admin

# Register your models here.
from . models import Agent08
 
# Register your models here.
class Agent08Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent08, Agent08Admin)

