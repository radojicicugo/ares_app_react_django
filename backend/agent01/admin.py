from django.contrib import admin

from . models import Agent01

# Register your models here.
# Register your models here.
class Agent01Admin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Agent01, Agent01Admin)


