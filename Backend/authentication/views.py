from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from .models import User, Course
from .serializers import UserSerializer, CourseSerializer

# Create your views here.
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        user_data = request.data.copy()
        if 'name' not in user_data or 'email' not in user_data or 'password' not in user_data:
            return Response({'error': 'Missing required fields'}, status=400)
        
        user = User.objects.filter(email=user_data['email']).first()
        if user:
            return Response({'error': 'User already exists.'}, status=409)

        user_data['name'] = user_data['name'].capitalize()
        names = user_data['name'].split(' ')
        
        new_user = User(
            first_name=' '.join(names[:-1]),
            last_name=names[-1],
            email=user_data['email'],
            user_role=user_data['userRole'],
            phone_number=user_data.get('phoneNumber'),
        )

        new_user.set_password(user_data['password'])

        new_user.save()

        return Response({'message': 'User registered successfully', 'status': 201}, status=201)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_courses(request):
    courses = Course.objects.all()
    return Response(CourseSerializer(courses, many=True).data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_course(request, course_id):
    course = Course.objects.get(id=course_id)
    if (course in request.user.enrolled_courses):
        return Response(CourseSerializer(course).data)
    else:
        return Response({'course_name': course.name, 'description': course.description, 'is_enrolled': False})
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enroll_course(request, course_id):
    course = Course.objects.get(id=course_id)
    request.user.enrolled_courses.add(course)
    course.enrolled_users.add(request.user)
    return Response({'message': 'Course enrolled successfully'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_enrolled_courses(request):
    return Response(UserSerializer(request.user.enrolled_courses, many=True).data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_mentors(request):
    mentors = User.objects.filter(user_role='mentor')
    return Response(UserSerializer(mentors, many=True).data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def make_mentor(request, user_id):
    user = User.objects.get(id=user_id)
    user.user_role = 'mentor'
    user.save()
    return Response({'message': 'Mentor created successfully'})