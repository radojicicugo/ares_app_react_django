from rest_framework import serializers
from . models import Agent10

class Agent10Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent10
        fields = '__all__'
