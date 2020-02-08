from rest_framework import (
    mixins,
    viewsets,
)

from django.contrib.auth import get_user_model

from .serializers import UserSerializer


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
