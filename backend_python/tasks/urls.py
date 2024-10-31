from django.urls import path
from . import views

urlpatterns = [
    path('api/tasks/completed', views.delete_completed_tasks, name='delete_completed_tasks'),  # Per DELETE /api/tasks/completed
    path('api/tasks/clearAll', views.clear_all_tasks, name='clear_all_tasks'),  # Per DELETE /api/tasks/clearAll
    path('api/tasks', views.tasks_view, name='tasks_view'),  # Per GET e POST su /api/tasks
    path('api/tasks/<str:id>', views.update_task, name='update_task'),  # Per PUT /api/tasks/:id
]
