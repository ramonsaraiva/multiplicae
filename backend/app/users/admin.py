from django.contrib import admin

from .models import UUIDKeyValue


@admin.register(UUIDKeyValue)
class UUIDKeyValueAdmin(admin.ModelAdmin):
    pass
