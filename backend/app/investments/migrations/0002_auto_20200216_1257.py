import csv
import re

from datetime import datetime
from decimal import Decimal

from django.conf import settings
from django.db import migrations


def get_index_from_profitability(profitability):
    if 'CDI' in profitability:
        return 1
    if 'IPCA' in profitability:
        return 2
    return 0


def process_file(Investment, path, type):

    with open(path) as cdb_f:
        reader = csv.reader(cdb_f, delimiter=',')
        next(reader)  # skip header
        for row in reader:
            (
                institution,
                liquidity,
                due_date,
                profitability,
                rating,
                rating_agency,
                minimal_application,
                _,
                _,
            ) = row
            if re.match(r'^\d+(\.\d+)?%$', profitability):
                # 8.5%
                profitability_type = 0
                index = None
                profitability = Decimal(profitability[:-1])
            elif re.match(r'^\d+(\.\d+)?%\s\w*$', profitability):
                # 110% CDI
                profitability_type = 1
                index = get_index_from_profitability(profitability)
                profitability = Decimal(profitability.split(' ')[0][:-1])
            else:
                # CDI + 2.0%
                profitability_type = 2
                index = get_index_from_profitability(profitability)
                profitability = Decimal(profitability.split(' ')[-1][:-1])

            liquidity = '0' if liquidity == 'Diária' else liquidity
            minimal_application = Decimal(
                minimal_application.replace('.', '').replace(',', '.'))
            Investment.objects.update_or_create(
                type=type,
                institution=institution,
                defaults={
                    'liquidity': int(liquidity.split(' ')[0]),
                    'due_date': datetime.strptime(due_date, '%d/%m/%Y'),
                    'profitability_type': profitability_type,
                    'profitability': profitability,
                    'index': index,
                    'rating': rating,
                    'rating_agency': rating_agency,
                    'minimal_application': minimal_application,
                },
            )


def create_investments_data(apps, schema_editor):
    cdb_path = settings.ASSETS_DIR / 'cdb.csv'
    lci_path = settings.ASSETS_DIR / 'lci.csv'
    lca_path = settings.ASSETS_DIR / 'lca.csv'

    Investment = apps.get_model('investments.Investment')
    InvestmentType = apps.get_model('investments.InvestmentType')

    cdb, _ = InvestmentType.objects.update_or_create(
        name='CDB', defaults={'name': 'CDB'})
    lci, _ = InvestmentType.objects.update_or_create(
        name='LCI', defaults={'name': 'LCI'})
    lca, _ = InvestmentType.objects.update_or_create(
        name='LCA', defaults={'name': 'LCA'})

    process_file(Investment, cdb_path, cdb)
    process_file(Investment, lci_path, lci)
    process_file(Investment, lca_path, lca)


class Migration(migrations.Migration):

    dependencies = [
        ('investments', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(
            create_investments_data, migrations.RunPython.noop)
    ]
