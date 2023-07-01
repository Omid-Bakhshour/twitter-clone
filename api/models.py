from django.db import models
from uuid import uuid4
from user.models import User


# Create your models here.


class Post(models.Model):
        id = models.UUIDField(primary_key=True, default=uuid4)
        user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='posts')
        body=models.TextField()
        created_at = models.DateTimeField(auto_now=True) 
        updated_at = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
        id = models.UUIDField(primary_key=True, default=uuid4)
        user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_likes')
        post=models.ForeignKey(Post,on_delete=models.CASCADE,related_name='post_likes')



class Comment(models.Model):
        id = models.UUIDField(primary_key=True, default=uuid4)
        user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_comments')
        post=models.ForeignKey(Post,on_delete=models.CASCADE,related_name='post_comments')
        body=models.TextField()
        created_at = models.DateTimeField(auto_now=True) 
        updated_at = models.DateTimeField(auto_now_add=True)


class Notification(models.Model):
        id = models.UUIDField(primary_key=True, default=uuid4)
        user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_notifications')
        body=models.TextField()
        created_at = models.DateTimeField(auto_now=True) 



class Bookmark(models.Model):
        id = models.UUIDField(primary_key=True, default=uuid4)
        user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_bookmarks')
        post=models.ForeignKey(Post,on_delete=models.CASCADE,related_name='post_bookmarks')
        created_at = models.DateTimeField(auto_now=True) 






