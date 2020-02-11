from mptt.admin import DraggableMPTTAdmin

from django.contrib import admin

from .models import (
    Trail,
    Node,
)


@admin.register(Trail)
class TrailAdmin(admin.ModelAdmin):
    pass


@admin.register(Node)
class NodeAdmin(DraggableMPTTAdmin):
    mptt_ident_field = 'name'
