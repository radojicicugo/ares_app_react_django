from django.contrib import admin

# Register your models here.
from . models import Agent02
 
# Register your models here.
class Agent02Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent02, Agent02Admin)


