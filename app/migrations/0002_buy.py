# Generated by Django 3.1.2 on 2020-10-09 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Buy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerid', models.IntegerField()),
                ('productid', models.IntegerField()),
                ('quantity', models.IntegerField()),
            ],
            options={
                'db_table': 'Buy',
            },
        ),
    ]
