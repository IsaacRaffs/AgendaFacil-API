from django.contrib import admin
from django.urls import path
from core.views import ListaAgendamentoView, DetailUpdateDeleteAlunos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('agenda/', ListaAgendamentoView.as_view()),
    path('agenda/<int:pk>', DetailUpdateDeleteAlunos.as_view()),
]
