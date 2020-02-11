from rest_framework import generics

from .models import Trail
from .serializers import TrailSerializer


class TrailAPIView(generics.RetrieveAPIView):
    model = Trail
    queryset = Trail.objects.all()
    serializer_class = TrailSerializer
    permission_classes = tuple()

    def get_object(self, queryset=None):
        return self.queryset.first()
