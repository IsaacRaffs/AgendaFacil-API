from rest_framework import viewsets
from .serializers import *
from .models import *

#   AGENDA_FUT API VIEWSET
class AgendaFutViewSets(viewsets.ModelViewSet):
    queryset = AgendaFutModel.objects.all()
    serializer_class = AgendaFutSerializer

#   AGENDA_HAIR API VIEWSET
class AgendaHairViewSets(viewsets.ModelViewSet):
    queryset = AgendaHairModel.objects.all()
    serializer_class = AgendaHairSerializer

#   SISORAPIDO API VIEWSET
class SisoRapidoViewSets(viewsets.ModelViewSet):
    queryset = SisoRapidoModel.objects.all()
    serializer_class = SisoRapidoSerializer
