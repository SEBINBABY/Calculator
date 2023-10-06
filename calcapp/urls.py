from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.calc_, name='calc_')
]