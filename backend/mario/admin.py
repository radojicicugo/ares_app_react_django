from django.contrib import admin

# Register your models here.
from . models import Mario

# Register your models here.

class MarioAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Mario, MarioAdmin)
