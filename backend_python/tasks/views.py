from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pymongo import MongoClient
from bson import ObjectId
from django.views.decorators.csrf import csrf_exempt


# Connessione al database

client = MongoClient('mongodb://localhost:27017')
db = client['todo_database']
tasks_collection = db['tasks']


@api_view(['GET', 'POST', 'DELETE'])
def tasks_view(request):
    if request.method == 'GET':
        tasks = tasks_collection.find()
        tasks_list = [{"_id": str(task['_id']), "title": task['title'], "completed": task['completed']} for task in tasks]
        return Response(tasks_list, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        try:
            data = request.data
            new_task = {
                "title": data['title'],
                "completed": data['completed']
            }
            result = tasks_collection.insert_one(new_task)
            new_task['_id'] = str(result.inserted_id)
            return Response(new_task, status=status.HTTP_201_CREATED)
        except KeyError as e:
            return Response({"error": "Missing field: " + str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_task(request, id):
    try:
        task = tasks_collection.find_one({"_id": ObjectId(id)})
        if not task:
            return Response({"error" : "Task not found"}, status=status.HTTP_404_NOT_FOUND)

        data = request.data
        updated_task = {
            "$set": {
                "title": data.get('title', task['title']),
                "completed": data.get("completed", task['completed'])
            }
        }
        tasks_collection.update_one({"_id": ObjectId(id)}, updated_task)
        task.update(updated_task['$set'])
        task['_id'] = str(task['_id'])
        return Response(task, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_completed_tasks(request):
    print("forse saverio")
    if request.method == 'DELETE':
        print("saverio")
        result = tasks_collection.delete_many({"completed": True})
        return Response(status=status.HTTP_204_NO_CONTENT if result.deleted_count > 0 else status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def clear_all_tasks(request):
    print("saverio")
    tasks_collection.delete_many({})
    return Response(status=status.HTTP_204_NO_CONTENT)
