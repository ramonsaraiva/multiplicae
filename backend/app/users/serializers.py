from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

from django.contrib.auth import get_user_model

from .models import UUIDKeyValue


User = get_user_model()

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class UserSerializer(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('email', 'password', 'token')
        read_only_fields = ('token', )
        extra_kwargs = {'password': {'write_only': True}}

    def get_token(self, instance) -> str:
        """
        Returns the JWT for the user payload.
        """
        payload = jwt_payload_handler(instance)
        return jwt_encode_handler(payload)

    def create(self, validated_data) -> User:
        """
        Creates an user instance manually calling `set_password` so the
        password is actually encrypted before inserted into the database.
        """
        user = User(email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class UUIDKeyValueSerializer(serializers.ModelSerializer):

    class Meta:
        model = UUIDKeyValue
        fields = ('id', 'key', 'value')
