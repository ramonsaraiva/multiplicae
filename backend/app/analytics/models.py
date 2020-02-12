from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class UserNodeProgress(models.Model):

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user_progress')
    node = models.ForeignKey(
        'trails.Node', on_delete=models.CASCADE, related_name='node_progress')
    progress = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('user', 'node',)

    def __str__(self) -> str:
        return f'{self.user} -> {self.node}: {self.progress}'
