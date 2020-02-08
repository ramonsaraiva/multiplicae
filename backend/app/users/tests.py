from rest_framework_jwt.utils import jwt_decode_handler

from django.contrib.auth import get_user_model
from django.test import TestCase

from .serializers import UserSerializer


User = get_user_model()


class UserSerializerTest(TestCase):

    def setUp(self):
        self.serializer = UserSerializer()
        self.user = User.objects.create(username='root')

    def test_get_token(self):
        token = self.serializer.get_token(self.user)
        decoded = jwt_decode_handler(token)
        self.assertEqual(decoded['username'], 'root')

    def test_create(self):
        user = self.serializer.create({'username': 'jon', 'password': 'doe'})
        self.assertEqual(user.username, 'jon')
