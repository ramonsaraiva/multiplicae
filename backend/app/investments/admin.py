from django.contrib import admin

from .models import (
    InvestmentType,
    Investment,
)


@admin.register(InvestmentType)
class InvestmentTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Investment)
class InvestmentAdmin(admin.ModelAdmin):
    list_display = (
        '__str__',
        'liquidity',
        'due_date',
        'profitability_text',
        'rating',
        'rating_agency',
    )
