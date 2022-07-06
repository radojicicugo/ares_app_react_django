from rest_framework import serializers
from . models import Dinc

class DincSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dinc
        fields = '__all__'
