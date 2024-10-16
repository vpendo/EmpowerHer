"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from authentication import views
from rest_framework import serializers
from authentication.serializers import UserSerializer, CourseSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshSlidingView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from drf_yasg.generators import OpenAPISchemaGenerator

class CustomSchemaGenerator(OpenAPISchemaGenerator):
    def get_schema(self, request=None, public=False):
        # Get the base schema
        schema = super().get_schema(request, public)

        # Modify the paths to include parameters for PUT, POST, and PATCH methods with request body
        for path, path_item in schema.paths.items():
            for method, operation_or_operations in path_item.items():
                if method.upper() in ['PUT', 'POST', 'PATCH']:
                    # If operation_or_operations is a list, loop through each operation
                    if isinstance(operation_or_operations, list):
                        for operation in operation_or_operations:
                            operation.parameters.append(
                                openapi.Parameter(
                                    name='body',
                                    in_=openapi.IN_BODY,
                                    required=True,
                                    schema=self.serializer_to_schema(UserSerializer),  # Remove parentheses
                                )
                            )
                    # If operation_or_operations is not a list, it's a single operation
                    else:
                        operation_or_operations.parameters.append(
                            openapi.Parameter(
                                name='body',
                                in_=openapi.IN_BODY,
                                required=True,
                                schema=self.serializer_to_schema(UserSerializer),  # Remove parentheses
                            )
                        )

        return schema

    def serializer_to_schema(self, serializer):
        properties = {}
        for field_name, field in serializer().fields.items():  # Remove parentheses
            # Determine the type of the field
            field_type = openapi.TYPE_STRING
            if isinstance(field, serializers.IntegerField):
                field_type = openapi.TYPE_INTEGER
            elif isinstance(field, serializers.FloatField):
                field_type = openapi.TYPE_NUMBER  # Change to TYPE_NUMBER for floating-point fields
            elif isinstance(field, serializers.BooleanField):
                field_type = openapi.TYPE_BOOLEAN

            properties[field_name] = openapi.Schema(type=field_type)

        return openapi.Schema(type=openapi.TYPE_OBJECT, properties=properties)

# Define a schema view with the custom schema generator
schema_view = get_schema_view(
    openapi.Info(
        title="Your API",
        default_version='v1',
        description="API Description",
        terms_of_service="https://www.example.com/policies/terms/",
        contact=openapi.Contact(email="contact@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
    generator_class=CustomSchemaGenerator,  # Use the custom schema generator
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login', TokenObtainPairView.as_view(), name="get_token"),
    path('api/token/refresh', TokenRefreshSlidingView.as_view(), name="refresh_token"),
    path('api/', include('authentication.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
