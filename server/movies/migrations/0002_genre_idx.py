# Generated by Django 3.2.1 on 2021-05-20 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='genre',
            name='idx',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
