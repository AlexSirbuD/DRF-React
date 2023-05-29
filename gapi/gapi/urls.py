
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from backend.views import *


# from dj_rest_auth.registration.views import RegisterView, VerifyEmailView
# from dj_rest_auth.views import LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),


    path('', include('backend.urls')),
    path('products/<str:pk>', StaffProduct.as_view()),
    path("products/", StaffProducts.as_view()),
    path("new-product/", ProductCreateView.as_view(), name="create_product"),
    path("user-products/", UserPostListAPIView.as_view(), name="user_products"),
    # path('api/v2/backend/', include('backend.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    

