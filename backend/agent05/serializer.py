from rest_framework import serializers
from . models import Agent05

class Agent05Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent05
        fields = '__all__'
