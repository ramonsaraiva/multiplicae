# Generated by Django 3.0.3 on 2020-02-16 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('investments', '0002_auto_20200216_1257'),
        ('trails', '0004_nodecontent'),
    ]

    operations = [
        migrations.CreateModel(
            name='NodeInvestment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('investment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='investments.Investment')),
                ('node_content', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trails.NodeContent')),
            ],
            options={
                'unique_together': {('node_content', 'investment')},
            },
        ),
        migrations.AddField(
            model_name='nodecontent',
            name='investments',
            field=models.ManyToManyField(related_name='contents', through='trails.NodeInvestment', to='investments.Investment'),
        ),
    ]
