from rest_framework import serializers
from . models import Radojicic

class RadojicicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Radojicic
        fields = '__all__'
