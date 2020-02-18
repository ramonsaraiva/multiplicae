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
from .services import get_node_content


class TrailAPIView(generics.RetrieveAPIView):
    model = Trail
    serializer_class = TrailSerializer
    permission_classes = tuple()

    def get_object(self, queryset=None):
        return Trail.objects.first()


class NodeContentAPIView(generics.RetrieveAPIView):
    model = NodeContent
    serializer_class = NodeContentSerializer
    permission_classes = ()
    authentication_classes = ()

    def get_object(self, queryset=None):
        try:
            return get_node_content(self.kwargs['node_id'], self.request.user)
        except NodeContent.DoesNotExist:
            raise Http404
