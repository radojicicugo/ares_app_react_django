from django.contrib import admin

from . models import Grujic

# Register your models here.

class GrujicAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Grujic, GrujicAdmin)
