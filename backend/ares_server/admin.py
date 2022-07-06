from django.contrib import admin
from . models import Radojicic
 
# Register your models here.
class RadojicicAdmin(admin.ModelAdmin):
    list_display=['prezime', 'pozicija','pocetak', 'zavrsetak', 'pauza', 'opis', 'dan','sati','total', 'total_sati']

admin.site.register(Radojicic, RadojicicAdmin)



