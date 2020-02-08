from django.urls import path

from rest_framework import routers

from app.users.views import UserViewSet


v1_router = routers.DefaultRouter()
v1_router.register('users', UserViewSet, basename='users')

v1_patterns = []

v1_urls = v1_router.urls + v1_patterns
