from mptt.admin import DraggableMPTTAdmin

from django.contrib import admin

from .models import (
    Node,
    NodeContent,
    NodeInvestment,
    Trail,
)


@admin.register(Trail)
class TrailAdmin(admin.ModelAdmin):
    pass


@admin.register(Node)
class NodeAdmin(DraggableMPTTAdmin):
    mptt_ident_field = 'name'


class NodeInvestmentInline(admin.TabularInline):
    model = NodeInvestment


@admin.register(NodeContent)
class NodeContentAdmin(admin.ModelAdmin):
    inlines = (NodeInvestmentInline,)
