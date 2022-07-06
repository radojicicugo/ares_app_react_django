from django.contrib import admin

# Register your models here.
from . models import Jeremic

# Register your models here.

class JeremicAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Jeremic, JeremicAdmin)
