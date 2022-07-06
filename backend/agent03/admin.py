from django.contrib import admin

# Register your models here.
from . models import Agent03
 
# Register your models here.
class Agent03Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent03, Agent03Admin)


