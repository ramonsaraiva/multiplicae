from rest_framework_jwt.utils import jwt_decode_handler

from django.contrib.auth import get_user_model
from django.test import TestCase

from .serializers import UserSerializer


User = get_user_model()


class UserSerializerTest(TestCase):

    def setUp(self):
        self.serializer = UserSerializer()
        self.user = User.objects.create(email='root@root.com')

    def test_get_token(self):
        token = self.serializer.get_token(self.user)
        decoded = jwt_decode_handler(token)
        self.assertEqual(decoded['email'], 'root@root.com')

    def test_create(self):
        user = self.serializer.create(
            {'email': 'root2@root.com', 'password': 'bananas'})
        self.assertEqual(user.email, 'root2@root.com')
