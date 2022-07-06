from rest_framework import serializers
from . models import Mario

class MarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mario
        fields = '__all__'
