from rest_framework import serializers
from . models import Tomo

class TomoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tomo
        fields = '__all__'
