from django.urls import path
from . import views 

urlpatterns = [
    path('', views.videocall, name='videocall'),
    # path('video_feed/', views.video_feed, name='video_feed'),
    # path('videocall/',views.videocall, name='videocall'),
]
