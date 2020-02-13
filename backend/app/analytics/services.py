from django.db.models import Avg

from app.trails.models import Node
from .models import UserNodeProgress


def update_parent_progress(node_id, user):
    parent = Node.objects.get(id=node_id).parent
    if not parent:
        return

    average = parent.children.with_progress_for(
            user).aggregate(Avg('progress'))['progress__avg']
    UserNodeProgress.objects.update_or_create(
        node_id=parent.id, user_id=user.id, defaults={'progress': average})

    update_parent_progress(parent.id, user)


def update_progress(node_id, user, progress):
    if user.id:
        UserNodeProgress.objects.update_or_create(
            node_id=node_id, user_id=user.id, defaults={'progress': progress})
        update_parent_progress(node_id, user)
