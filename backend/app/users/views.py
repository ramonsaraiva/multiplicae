import uuid

from rest_framework import (
    mixins,
    viewsets,
)
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth import get_user_model

from .models import UUIDKeyValue
from .serializers import (
    UserSerializer,
    UUIDKeyValueSerializer,
)


User = get_user_model()


class UserViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    create:
    Creates a new user instance, returning a JWT already.
    """
    authentication_classes = ()
    permission_classes = ()
    throttle_scope = 'users'
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UUIDAPIView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        return Response({'uuid': str(uuid.uuid4())})


class UUIDKeyValueViewSet(mixins.UpdateModelMixin, viewsets.GenericViewSet):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = UUIDKeyValueSerializer
    queryset = UUIDKeyValue.objects.all()

    def get_object(self):
        instance, _ = UUIDKeyValue.objects.get_or_create(id=self.kwargs['pk'])
        return instance
