from rest_framework import serializers
from . models import Vane

class VaneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vane
        fields = '__all__'
