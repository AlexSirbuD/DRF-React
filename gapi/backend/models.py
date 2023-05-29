from django.db import models
from django.contrib.auth.models import User

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token



class Product(models.Model):
    title = models.CharField(max_length=200, verbose_name='Product')
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null = True, related_name='products')
    brand = models.CharField(max_length=255, verbose_name="Brand", null=True)
    size = models.CharField(max_length=255, verbose_name="Size", null=True)
    content = models.TextField(blank=True, verbose_name="Description")
    price = models.FloatField(null=True, blank=True, verbose_name='Price $')
    images = models.ImageField(upload_to='products', null=True, blank=True)
    img_thumb = models.ImageField(upload_to='products/thumb', null=True, blank=True)
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Created")
    time_update = models.DateTimeField(auto_now=True, verbose_name="Updated")
    published = models.BooleanField(default=True, verbose_name="Published")
    

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-time_update']
        
    


    
       
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


