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
    progress = serializers.SerializerMethodField()
    children = RecursiveField(many=True, required=False)

    class Meta:
        model = Node
        fields = ('id', 'name', 'abbreviation', 'progress', 'children')

    def get_progress(self, obj):
        return obj.progress_for(self.context.get('request').user)


class TrailSerializer(serializers.ModelSerializer):
    root = serializers.SerializerMethodField()

    class Meta:
        model = Trail
        fields = ('id', 'name', 'root')

    def get_root(self, obj):
        serializer_context = {'request': self.context.get('request')}
        return NodeSerializer(obj.root, context=serializer_context).data
