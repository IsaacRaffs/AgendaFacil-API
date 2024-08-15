from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class AgendaFutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgendaFutModel
        fields = '__all__'

class AgendaHairSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgendaHairModel
        fields = '__all__'

class SisoRapidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SisoRapidoModel
        fields = '__all__'

