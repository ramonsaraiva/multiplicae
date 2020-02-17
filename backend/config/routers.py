from rest_framework import routers

from django.urls import path

from app.trails.views import (
    NodeContentAPIView,
    TrailAPIView,
)
from app.users.views import (
    UserViewSet,
    UUIDAPIView,
)


v1_router = routers.DefaultRouter()
v1_router.register('users', UserViewSet, basename='users')

v1_patterns = [
    path('trails/<slug:slug>/', TrailAPIView.as_view(), name='trails'),
    path(
        'trails/<slug:slug>/<int:node_id>/',
        NodeContentAPIView.as_view(),
        name='trails_node',
    ),
    path('users/uuid/', UUIDAPIView.as_view(), name='users_uuid'),
]

v1_urls = v1_router.urls + v1_patterns
