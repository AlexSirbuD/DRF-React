from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

router = DefaultRouter()
router.register('products', ProductViewSet, basename='products')


urlpatterns = [

    # path('articles/', article_list),
    # path('articles/<slug:slug>/', article_details)
    # path('articles/', ArticleList.as_view()),
    # path('articles/<slug:slug>/', ArticleDetails.as_view())
    path('', include(router.urls))
]

