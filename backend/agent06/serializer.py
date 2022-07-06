from rest_framework import serializers
from . models import Agent06

class Agent06Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent06
        fields = '__all__'
