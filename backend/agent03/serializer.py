from rest_framework import serializers
from . models import Agent03

class Agent03Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent03
        fields = '__all__'
