from rest_framework import serializers

from .models import (
    Node,
    Trail,
)


class RecursiveField(serializers.Serializer):

    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class NodeSerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True, required=False)

    class Meta:
        model = Node
        fields = ('id', 'name', 'children')


class TrailSerializer(serializers.ModelSerializer):
    root = NodeSerializer()

    class Meta:
        model = Trail
        fields = ('id', 'name', 'root')
