from rest_framework.serializers import ModelSerializer
from .models import Agenda

class ListaAgendamento(ModelSerializer):
    class Meta:
        model = Agenda
        fields = ['id', 'nome', 'email', 'data', 'n_cll']