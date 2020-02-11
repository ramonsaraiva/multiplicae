from mptt.models import (
    MPTTModel,
    TreeForeignKey,
)

from django.db import models


class Trail(models.Model):

    name = models.CharField(max_length=64)

    def __str__(self) -> str:
        return self.name


class Node(MPTTModel):

    trail = models.OneToOneField(
        Trail,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='root',
    )
    parent = TreeForeignKey(
        'self', on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='children',
    )
    name = models.CharField(max_length=64)
    is_abstract = models.BooleanField(default=False)
    is_path = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name
