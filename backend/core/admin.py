from django.contrib import admin
from .models import (
    AgendaFutModel,
    AgendaHairModel,
    SisoRapidoModel,
)


@admin.register(AgendaFutModel)
class AdminClienteAgendaFutModel(admin.ModelAdmin):
    list_display = ['nome', 'email', 'telefone', 'idade', 'data', 'campo']

@admin.register(AgendaHairModel)
class AdminAgendaHairModel(admin.ModelAdmin):
    list_display = ['nome', 'email', 'telefone', 'idade', 'data']

@admin.register(SisoRapidoModel)
class AdminSisoRapidoModel(admin.ModelAdmin):
    list_display = ['nome', 'email', 'telefone', 'idade', 'data', 'tipo_tratamento']