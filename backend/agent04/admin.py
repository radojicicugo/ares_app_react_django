from django.contrib import admin

# Register your models here.
from . models import Agent04
 
# Register your models here.
class Agent04Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent04, Agent04Admin)


