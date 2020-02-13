from django.db import models


class InvestmentType(models.Model):
    name = models.CharField(max_length=8)

    def __str__(self) -> str:
        return self.name


class Investment(models.Model):

    TYPE_PRE = 0
    TYPE_POS = 1
    TYPE_PLUS = 2
    TYPE_CHOICES = (
        (TYPE_PRE, 'Prefixado'),
        (TYPE_POS, 'Pós-fixado'),
        (TYPE_PLUS, '+'),
    )

    INDEX_SELIC = 0
    INDEX_CDI = 1
    INDEX_IPCA = 2
    INDEX_CHOICES = (
        (INDEX_SELIC, 'SELIC'),
        (INDEX_CDI, 'CDI'),
        (INDEX_IPCA, 'IPCA'),
    )

    type = models.ForeignKey(InvestmentType, on_delete=models.CASCADE)
    institution = models.CharField(max_length=64)
    liquidity = models.PositiveIntegerField(null=True, blank=True)
    due_date = models.DateField()
    profitability_type = models.IntegerField(choices=TYPE_CHOICES)
    profitability = models.DecimalField(max_digits=13, decimal_places=2)
    index = models.IntegerField(choices=INDEX_CHOICES, null=True, blank=True)
    rating = models.CharField(
        max_length=16, null=True, blank=True)
    rating_agency = models.CharField(
        max_length=64, null=True, blank=True)
    minimal_application = models.DecimalField(
        max_digits=13, decimal_places=2, null=True, blank=True)

    def __str__(self) -> str:
        return f'{self.type} - {self.institution}'

    @property
    def is_pre(self):
        return self.profitability_type == self.TYPE_PRE

    @property
    def is_pos(self):
        return self.profitability_type == self.TYPE_POS

    @property
    def is_plus(self):
        return self.profitability_type == self.PLUS

    @property
    def profitability_text(self):
        if self.is_pre:
            return f'{self.profitability}%'
        if self.is_pos:
            return f'{self.profitability}% {self.get_index_display()}'
        return f'{self.index} + {self.profitability}%'
