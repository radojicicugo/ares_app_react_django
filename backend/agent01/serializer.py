from rest_framework import serializers
from . models import Agent01

class Agent01Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent01
        fields = '__all__'
