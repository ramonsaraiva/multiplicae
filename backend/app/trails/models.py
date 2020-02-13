from mptt.models import (
    MPTTModel,
    TreeForeignKey,
)

from django.db import models

from app.analytics.models import UserNodeProgress


class TrailQuerySet(models.QuerySet):

    def with_progress_for(self, user):
        return self.prefetch_related(
            models.Prefetch(
                'root', queryset=Node.objects.with_progress_for(user)),
        )


class Trail(models.Model):

    name = models.CharField(max_length=64)

    objects = TrailQuerySet.as_manager()

    def __str__(self) -> str:
        return self.name


class NodeQuerySet(models.QuerySet):

    def with_progress_for(self, user):
        return self.annotate(
            progress=models.F('node_progress__progress'),
        ).filter(
            models.Q(node_progress__user=user) |
            models.Q(node_progress__user__isnull=True),
        )


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
    abbreviation = models.CharField(max_length=16)
    is_abstract = models.BooleanField(default=False)
    is_path = models.BooleanField(default=False)

    objects = NodeQuerySet.as_manager()

    def __str__(self) -> str:
        return f'{self.name} - {self.abbreviation}'

    def progress_for(self, user):
        if not user.id:
            return 0
        try:
            return UserNodeProgress.objects.get(node=self, user=user).progress
        except UserNodeProgress.DoesNotExist:
            return 0
