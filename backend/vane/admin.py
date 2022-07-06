from django.contrib import admin

from . models import Vane

# Register your models here.

class VaneAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Vane, VaneAdmin)
