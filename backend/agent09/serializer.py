from rest_framework import serializers
from . models import Agent09

class Agent09Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent09
        fields = '__all__'
