from rest_framework import serializers
from . models import Agent02

class Agent02Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agent02
        fields = '__all__'
