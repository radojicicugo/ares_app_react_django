from rest_framework import serializers
from . models import Agent04

class Agent04Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent04
        fields = '__all__'
