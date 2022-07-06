from rest_framework import serializers
from . models import Vlada

class VladaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vlada
        fields = '__all__'
