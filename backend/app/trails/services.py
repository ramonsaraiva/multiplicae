from app.analytics.services import update_progress
from .models import NodeContent


def get_node_content(node_id, user):
    node_content = NodeContent.objects.select_related(
        'node').get(node_id=node_id)
    update_progress(node_id, user, 100)
    return node_content
