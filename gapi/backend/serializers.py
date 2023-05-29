from rest_framework import serializers
from .models import *





class ProductSerializer(serializers.ModelSerializer):
    
    published = serializers.BooleanField(default=True)
    time_create = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    time_update = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
    images = serializers.ImageField(required=False)
    img_thumb = serializers.ImageField(required=False)
    slug = serializers.SlugField(read_only=True)
    author = serializers.StringRelatedField()
    
    class Meta:
        model = Product
        fields = '__all__'

    






