from rest_framework.reverse import reverse
from rest_framework import serializers

from .models import (
    Node,
    NodeContent,
    Trail,
)


class RecursiveField(serializers.Serializer):

    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class ContentHyperlinkedRelatedField(serializers.HyperlinkedRelatedField):
    view_name = 'trails_node'
    queryset = NodeContent.objects.all()

    def get_url(self, obj, view_name, request, format):
        url_kwargs = {
            'slug': 'default',
            'node_id': obj.node_id,
        }
        return reverse(
            view_name, kwargs=url_kwargs, request=request, format=format)


class NodeSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()
    children = RecursiveField(source='get_children', many=True, required=False)
    contents = ContentHyperlinkedRelatedField(
        source='nodecontent_set', many=True, view_name='trails_node')

    class Meta:
        model = Node
        fields = (
            'id',
            'name',
            'abbreviation',
            'progress',
            'is_abstract',
            'is_path',
            'children',
            'contents',
        )

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


class NodeContentSerializer(serializers.ModelSerializer):

    class Meta:
        model = NodeContent
        fields = ('id', 'content_type', 'content')
