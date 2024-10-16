from rest_framework.serializers import ModelSerializer

from .models import User, Course

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'