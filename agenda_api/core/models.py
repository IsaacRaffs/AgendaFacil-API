from django.db import models


class Agenda(models.Model):
    nome = models.CharField(max_length=80)
    email = models.EmailField(null=True, blank=True)
    data = models.DateField()
    n_cll = models.PositiveBigIntegerField(default=0000000000)




