from rest_framework import routers

from django.urls import path

from app.trails.views import (
    NodeContentAPIView,
    TrailAPIView,
)
from app.users.views import (
    UserViewSet,
    UUIDAPIView,
    UUIDLinkAPIView,
    UUIDKeyValueViewSet,
)


v1_router = routers.DefaultRouter()
v1_router.register('users', UserViewSet, basename='users')
v1_router.register(
    'users/key_value',
    UUIDKeyValueViewSet,
    basename='users_keyvalue',
)

v1_patterns = [
    path('trails/<slug:slug>/', TrailAPIView.as_view(), name='trails'),
    path(
        'trails/<slug:slug>/<int:node_id>/',
        NodeContentAPIView.as_view(),
        name='trails_node',
    ),
    path('users/uuid/', UUIDAPIView.as_view(), name='users_uuid'),
    path(
        'users/uuid/<uuid:uuid>/',
        UUIDLinkAPIView.as_view(),
        name='users_uuid_link',
    ),
]

v1_urls = v1_router.urls + v1_patterns
