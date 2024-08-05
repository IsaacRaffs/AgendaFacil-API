from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    #   AGENDA_FUT API VIEW
    path('api/agendafut/', ListCreate_AgendaFut.as_view()),
    path('api/agendafut/<int:pk>', RetrieveUpdateDestroy_AgendaFut.as_view()),

    #   AGENDA_HAIR API VIEW
    path('api/agendahair/', ListCreate_AgendaHair.as_view()),
    path('api/agendahair/<int:pk>', RetrieveUpdateDestroy_AgendaHair.as_view()),

    #   SISORAPIDO API VIEW
    path('api/sisorapido/', ListCreate_SisoRapido.as_view()),
    path('api/sisorapido/<int:pk>', RetrieveUpdateDestroy_SisoRapido.as_view()),

    #   PAINEL ADMIN
    path('paineladmin', PainelAdmin),
]
