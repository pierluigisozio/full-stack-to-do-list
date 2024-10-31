import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, timeout} from 'rxjs';

interface Task {
  _id?: string;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/completed`);
  }

  clearAll(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clearAll`);
  }
}