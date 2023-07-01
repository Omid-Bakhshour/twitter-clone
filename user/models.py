from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin,BaseUserManager

# Create your models here.
import uuid



class UserManager(BaseUserManager):

    def get_queryset(self):
        return super().get_queryset()
    def create_user(self, email,username, password=None, is_staff=False, is_active=True, is_admin=False):

        if not email:
            raise ValueError('users must have a phone number')
        if not password:
            raise ValueError('user must have a password')
        if not username:
            raise ValueError('user must have a username')

        user_obj = self.model(
            phone = email
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        return user_obj

    def create_staffuser(self, phone, password=None):
        user = self.create_user(
            phone,
            password = password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email,username, passowrd=None, **extra_data):
        print("<- {}".format(extra_data))
        user = self.create_user(
            email,
            password=extra_data["password"],
            username=username
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user





class User(AbstractBaseUser,PermissionsMixin):

    id=models.UUIDField(unique=True,default=uuid.uuid4,primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    username = models.CharField(max_length=100, unique=True)
    bio = models.TextField( blank=True, null=True)
    email=models.EmailField(unique=True)
    emailVerifiled=models.DateTimeField(blank=True,null=True)
    image=models.ImageField(upload_to='profile-pics',null=True, blank=True)
    coverImage=models.ImageField(upload_to='profile-pics',null=True, blank=True)
    profileImage=models.ImageField(upload_to='profile-pics',null=True, blank=True)
    hasNotification=models.BooleanField(default=False)
    password=models.TextField()
    created_at = models.DateTimeField(auto_now=True) 
    updated_at = models.DateTimeField(auto_now_add=True)

    REQUIRED_FIELDS = []
    USERNAME_FIELD='username'

    objects = UserManager()

    def __str__(self):
        return self.phone



class Follow(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='following')
    follow = models.ForeignKey(User, on_delete=models.CASCADE,related_name='followers')
    created_at = models.DateTimeField(auto_now=True) 
    def __str__(self):
        return str(self.user.username)
