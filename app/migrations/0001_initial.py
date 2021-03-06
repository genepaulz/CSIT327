# Generated by Django 3.1.2 on 2020-10-04 20:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'Admins',
            },
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=50)),
                ('middlename', models.CharField(max_length=50, null=True)),
                ('lastname', models.CharField(max_length=50)),
                ('birthday', models.DateField()),
                ('gender', models.CharField(max_length=9)),
                ('street', models.CharField(max_length=150)),
                ('barangay', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=150)),
                ('province', models.CharField(max_length=150)),
                ('zipcode', models.IntegerField()),
                ('country', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'Person',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dateregistered', models.DateField(auto_now=True)),
                ('productname', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('brand', models.CharField(max_length=50)),
                ('color', models.CharField(max_length=30)),
                ('size', models.CharField(max_length=20)),
                ('price', models.CharField(max_length=50)),
                ('stocks', models.IntegerField()),
            ],
            options={
                'db_table': 'Product',
            },
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('person_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='app.person')),
                ('dateregistered', models.DateField(auto_now=True)),
                ('email', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
            ],
            options={
                'db_table': 'Customer',
            },
            bases=('app.person',),
        ),
    ]
