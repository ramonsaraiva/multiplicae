from rest_framework import generics

from django.http import Http404

from .models import (
    NodeContent,
    Trail,
)
from .serializers import (
    NodeContentSerializer,
    TrailSerializer,
)


class TrailAPIView(generics.RetrieveAPIView):
    model = Trail
    serializer_class = TrailSerializer
    permission_classes = tuple()

    def get_object(self, queryset=None):
        return Trail.objects.first()


class NodeContentAPIView(generics.RetrieveAPIView):
    model = NodeContent
    serializer_class = NodeContentSerializer

    def get_object(self, queryset=None):
        try:
            return NodeContent.objects.get(node_id=self.kwargs['node_id'])
        except NodeContent.DoesNotExist:
            raise Http404
