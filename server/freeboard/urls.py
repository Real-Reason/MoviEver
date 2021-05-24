
from django.urls import path
from . import views

urlpatterns = [
    path('', views.review),
    path('<int:review_pk>/', views.review_detail),
    path('<int:review_pk>/comment/', views.comment),
    path('<int:review_pk>/validation/', views.check_validation),
    

]
