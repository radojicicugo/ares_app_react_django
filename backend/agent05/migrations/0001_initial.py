# Generated by Django 4.0.1 on 2022-06-22 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agent05',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prezime', models.CharField(max_length=50)),
                ('dan', models.DateField(null=True)),
                ('pozicija', models.CharField(max_length=40)),
                ('pocetak', models.DateTimeField()),
                ('zavrsetak', models.DateTimeField()),
                ('pauza', models.CharField(max_length=5)),
                ('opis', models.TextField()),
                ('sati', models.FloatField()),
                ('total', models.FloatField()),
            ],
        ),
    ]
