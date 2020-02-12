from django.contrib import admin

from .models import UserNodeProgress


@admin.register(UserNodeProgress)
class UserNodeProgressAdmin(admin.ModelAdmin):
    pass
