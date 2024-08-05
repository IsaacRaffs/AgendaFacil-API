from django.shortcuts import render
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView
    )
from .models import *
from .serializers import *

#   CLIENTE API VIEW


#   AGENDA_FUT API VIEW
class ListCreate_AgendaFut(ListCreateAPIView):
    queryset = AgendaFutModel.objects.all()
    serializer_class = AgendaFutSerializer

class RetrieveUpdateDestroy_AgendaFut(RetrieveUpdateDestroyAPIView):
    queryset = AgendaFutModel.objects.all()
    serializer_class = AgendaFutSerializer

#   AGENDA_HAIR API VIEW
class ListCreate_AgendaHair(ListCreateAPIView):
    queryset = AgendaHairModel.objects.all()
    serializer_class = AgendaHairSerializer

class RetrieveUpdateDestroy_AgendaHair(RetrieveUpdateDestroyAPIView):
    queryset = AgendaHairModel.objects.all()
    serializer_class = AgendaHairSerializer

#   SISORAPIDO API VIEW
class ListCreate_SisoRapido(ListCreateAPIView):
    queryset = SisoRapidoModel.objects.all()
    serializer_class = SisoRapidoSerializer

class RetrieveUpdateDestroy_SisoRapido(RetrieveUpdateDestroyAPIView):
    queryset = SisoRapidoModel.objects.all()
    serializer_class = SisoRapidoSerializer


#   ADMINISTRAÇÃO INTERNA
def PainelAdmin(request):
    agendafut = AgendaFutModel.objects.all()
    agendahair = AgendaHairModel.objects.all()
    sisorapido = SisoRapidoModel.objects.all()

    content = {
        "futebol": agendafut,
        "cabelo": agendahair,
        "dentista": sisorapido,
    }

    return render(request, 'PainelAdmin/index.html', content)