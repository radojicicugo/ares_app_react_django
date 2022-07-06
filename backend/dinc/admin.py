from django.contrib import admin

# Register your models here.
from . models import Dinc

# Register your models here.

class DincAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Dinc, DincAdmin)
