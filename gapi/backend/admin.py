from django.contrib import admin

from .models import *


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'slug', 'title', 'price', 'time_create', 'published', 'content', 'size')
    list_display_links = ('id', 'title', 'price')
    search_fields = ('title', 'content', 'price')
    list_editable = ('published',)
    list_filter = ('published', 'time_create')




admin.site.register(Product, ProductAdmin)
