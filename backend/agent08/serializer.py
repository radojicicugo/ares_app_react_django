from rest_framework import serializers
from . models import Agent08

class Agent08Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent08
        fields = '__all__'
