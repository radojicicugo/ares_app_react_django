from rest_framework import serializers
from . models import Agent07

class Agent07Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent07
        fields = '__all__'
