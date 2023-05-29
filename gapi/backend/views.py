from backend.permissions import IsAuthor

from .serializers import *
from .models import *

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from rest_framework import status
 
from .models import *

from rest_framework.decorators import api_view
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Product
from .serializers import *



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    
    parser_class = [MultiPartParser, FormParser]
    # serializer_class = ProductSerializer

    permission_classes= [IsAuthor]
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    
    def perform_create(self, serializer):
        return serializer.save(author=self.request.user)
    

class ProductCreateView(CreateAPIView):

    permission_classes= [IsAuthor]
    authentication_classes = (TokenAuthentication, SessionAuthentication)

    parser_class = [MultiPartParser, FormParser]
    serializer_class = ProductSerializer





class StaffProducts(APIView):
    

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    

class StaffProduct(APIView):

    permission_classes= [IsAuthor]
    authentication_classes = (TokenAuthentication, SessionAuthentication)

    def get(self, request, slug):
        products = get_object_or_404(Product, slug=slug)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def put(self, request, slug):
        product = get_object_or_404(Product, slug=slug)
        serializer = ProductSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, slug):
        product = get_object_or_404(Product, slug=slug)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class UserPostListAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(author=self.request.user)
    


      