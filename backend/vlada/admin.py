from django.contrib import admin

# Register your models here.
from . models import Vlada

# Register your models here.

class VladaAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Vlada, VladaAdmin)

