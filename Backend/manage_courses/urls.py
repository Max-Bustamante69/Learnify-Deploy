from django.urls import path
from .views import CourseListCreateView, CourseDetailView, get_owned_courses, export_courses_report, fetch_external_nfts

urlpatterns = [
    path('', CourseListCreateView.as_view(), name='course_list_create'),
    path('<int:pk>/', CourseDetailView.as_view(), name='course_detail'),
    path('owned/', get_owned_courses, name='owned_courses'),
    path('export/', export_courses_report, name='export_courses_report'),
    path('nfts/', fetch_external_nfts, name='fetch-nfts'),
]