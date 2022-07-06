from rest_framework import serializers
from . models import Jeremic

class JeremicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jeremic
        fields = '__all__'
