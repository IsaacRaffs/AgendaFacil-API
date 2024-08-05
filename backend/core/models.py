from django.db import models
from datetime import datetime    


class Admin(models.Model):
    nome = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, blank=True, null=False)
    telefone = models.IntegerField(null=True, blank=True)
    idade = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Admin'
        verbose_name_plural = 'Admins'

class AgendaFutModel(models.Model):
    CAMPO_CHOICES = (
        ("C1", "Campo 1"),
        ("C2", "Campo 2"),
    )
    nome = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, blank=True, null=False)
    telefone = models.IntegerField(null=True, blank=True)
    idade = models.IntegerField(null=True, blank=True)
    campo = models.CharField(max_length=400, choices=CAMPO_CHOICES, default='C1')
    data = models.DateField(default=datetime.now, blank=True, null=True)



    #   chave estrangeira
    #cliente = models.ForeignKey(ClienteModel, on_delete=models.CASCADE, related_name='futebol')
    
    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Agenda de Futebol'
        verbose_name_plural = 'Agenda de Futeóis'

class AgendaHairModel(models.Model):
    nome = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, blank=True, null=False)
    telefone = models.IntegerField(null=True, blank=True)
    idade = models.IntegerField(null=True, blank=True)
    data = models.DateField(default=datetime.now, blank=True, null=True)


    #   chave estrangeira
    #cliente = models.ForeignKey(ClienteModel, on_delete=models.CASCADE, related_name='cabelo')

    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Agenda de Cabeleireiro'

class SisoRapidoModel(models.Model):
    TRATAMENTO_CHOICES = (
        ("LIMPEZA", "Limpeza"),
        ("EXTRACAO", "Extração de Siso"),
        ("TDC", "Tratamento de Canal"),
    )

    nome = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, blank=True, null=False)
    telefone = models.IntegerField(null=True, blank=True)
    idade = models.IntegerField(null=True, blank=True)
    data = models.DateField(default=datetime.now, blank=True, null=True)

    tipo_tratamento = models.CharField(max_length=400, choices=TRATAMENTO_CHOICES, default='LIMPEZA')
    
    #   chave estrangeira
    #cliente = models.ForeignKey(ClienteModel, on_delete=models.CASCADE, related_name='dentista')

    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Agenda de Dentista'