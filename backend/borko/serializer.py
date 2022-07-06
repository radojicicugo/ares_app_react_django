from rest_framework import serializers
from . models import Borko

class BorkoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borko
        fields = '__all__'
