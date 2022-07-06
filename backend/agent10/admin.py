from django.contrib import admin

# Register your models here.
# Register your models here.
from . models import Agent10
 
# Register your models here.
class Agent10Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent10, Agent10Admin)

