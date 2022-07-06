from rest_framework import serializers
from . models import Grujic

class GrujicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grujic
        fields = '__all__'
