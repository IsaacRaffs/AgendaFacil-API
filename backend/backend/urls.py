from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic.base import TemplateView

from core.models import *
from core.viewsets import *

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
   ),
   public=True,
)

urlpatterns = [
   #  ROTAS INTERNAS
   path('admin/', admin.site.urls),
   path('', include('core.urls')),
   
   #   SWAGGER_DOCS
   path('api/swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('api/swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   
   #  ALLAUTH_API
   path('api/auth/', include('allauth.urls')),
]
