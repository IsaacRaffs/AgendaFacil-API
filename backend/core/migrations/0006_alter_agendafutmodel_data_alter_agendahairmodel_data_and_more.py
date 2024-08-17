# Generated by Django 5.0 on 2024-08-17 00:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_agendafutmodel_campo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agendafutmodel',
            name='data',
            field=models.DateField(blank=True, default=datetime.date.today, null=True),
        ),
        migrations.AlterField(
            model_name='agendahairmodel',
            name='data',
            field=models.DateField(blank=True, default=datetime.date.today, null=True),
        ),
        migrations.AlterField(
            model_name='sisorapidomodel',
            name='data',
            field=models.DateField(blank=True, default=datetime.date.today, null=True),
        ),
    ]
