from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext_lazy as _

# Create your models here.
class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('totalPoints', 0)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('totalPoints', 0)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields) 

class UserRoleChoices(models.TextChoices):
    """
    Choices representing the roles of a user.
    """
    Student = 'student'
    Mentor = 'mentor'  

class User(AbstractUser):
    """
    Model representing a User.

    Attributes:
        id (Integer): The primary key and unique identifier of the user.
        email (String): The email of the user.
        phone_number (String): The phone number of the user.
        first_name (String): The first name of the user.
        last_name (String): The last name of the user.
        password (String): The password of the user.
        user_role (String): The role of the user.
        sharecode (String): A code the user can share with others to get rewards.
        totalPoints (Integer): The total achievement points of the user.
        canShare (Boolean): Whether the user can share his sharecode or not.
        created_at (DateTime): The date and time when the user was created.
    """
    username = None
    USERNAME_FIELD = 'email'
    email = models.EmailField(_('email address'), unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    enrolled_courses = models.ManyToManyField(
        'Course',
        related_name='enrolled_users',
        blank=True
    )
    user_role = models.CharField(max_length=10, choices=UserRoleChoices.choices, default=UserRoleChoices.Student)
    REQUIRED_FIELDS = []
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        verbose_name=_('groups'),
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
        help_text=_('Specific permissions for this user.'),
        verbose_name=_('user permissions'),
    )

class Course(models.Model):
    """
    Model representing a course.

    Attributes:
        id (Integer): The primary key and unique identifier of the course.
        name (String): The name of the course.
        description (String): The description of the course.
        created_at (DateTime): The date and time when the course was created.
    """
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class CourseTopic(models.Model):
    """
    Model representing a course topic.

    Attributes:
        id (Integer): The primary key and unique identifier of the course topic.
        name (String): The name of the course topic.
        description (String): The description of the course topic.
        created_at (DateTime): The date and time when the course topic was created.
    """
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    image = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class CourseMaterial(models.Model):
    """
    Model representing a course material.

    Attributes:
        id (Integer): The primary key and unique identifier of the course material.
        name (String): The name of the course material.
        description (String): The description of the course material.
        created_at (DateTime): The date and time when the course material was created.
    """
    course_topic = models.ForeignKey(CourseTopic, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    video = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
