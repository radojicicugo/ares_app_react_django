from rest_framework import serializers
from . models import Angelovski

class AngelovskiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Angelovski
        fields = '__all__'
