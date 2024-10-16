from . import views

from django.urls import path

urlpatterns = [
    path('register', views.register, name='register'),
    path('courses', views.get_courses, name='get_courses'),
    path('course/<int:course_id>', views.get_course, name='get_course'),
    path('enroll/<int:course_id>', views.enroll_course, name='enroll_course'),
    path('enrolled_courses', views.get_enrolled_courses, name='get_enrolled_courses'),
    path('mentors', views.get_mentors, name='get_mentors'),
]