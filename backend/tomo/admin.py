from django.contrib import admin

from . models import Tomo

# Register your models here.

class TomoAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Tomo, TomoAdmin)
