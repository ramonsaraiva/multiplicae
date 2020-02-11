from rest_framework import routers

from django.urls import path

from app.trails.views import (
    TrailAPIView,
)
from app.users.views import UserViewSet


v1_router = routers.DefaultRouter()
v1_router.register('users', UserViewSet, basename='users')

v1_patterns = [
    path('trails/<slug:slug>/', TrailAPIView.as_view()),
]

v1_urls = v1_router.urls + v1_patterns
