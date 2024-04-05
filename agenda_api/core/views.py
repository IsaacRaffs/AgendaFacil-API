from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .models import Agenda
from .serializers import ListaAgendamento

class ListaAgendamentoView(APIView):
    def get(self, request):
        agenda = Agenda.objects.all()
        serializer = ListaAgendamento(agenda, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ListaAgendamento(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DetailUpdateDeleteAlunos(APIView):
    def get_object(self, pk):
        try:
            return Agenda.objects.get(pk=pk)
        except Agenda.DoesNotExist:
            return Http404
        
    def get(self, request, pk):
        alunos = self.get_object(pk)
        serializer = ListaAgendamento(alunos)
        return Response(serializer.data)
    
    def put(self, request, pk):
        alunos = self.get_object(pk)
        serializer = ListaAgendamento(alunos, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.erros, status=404)
    
    def delete(self, request, pk):
        alunos = self.get_object(pk)
        alunos.delete()
        return Response(status=204)
