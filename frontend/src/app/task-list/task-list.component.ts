import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../services/task.service'
import { ITask } from '../models/task.model'
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss', '../app.component.scss']
})
export class TaskListComponent implements OnInit{
  tasks: ITask[] = [];
  private isCreating = false;
  newTaskTitle = '';
  @ViewChild('taskInput') taskInputRef!: ElementRef<HTMLInputElement>;

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.map(task => ({
        ...task,
        id: task._id
      }))
    })
  }

  get creating() : boolean {
    return this.isCreating
  }
  startCreating() : void{
    this.isCreating = true;
    setTimeout(() => this.taskInputRef.nativeElement.focus(), 0)
  }

  stopCreating(){
    this.isCreating = false;
  }
  createTask(){
    if(this.newTaskTitle.trim()){
      const newTask : ITask = {
        title: this.newTaskTitle,
        completed: false
      }
      this.taskService.addTask(newTask).subscribe((task) =>{
        this.tasks.push({...task, id: task._id});
        this.newTaskTitle = '';
      })
    }
  }

  switchCreating(){
    if(!this.isCreating) {
      this.startCreating()
    } else{
      this.stopCreating();
    }
  }

  onEnterTask(event: KeyboardEvent){
    if (event.key === "Enter"){
      this.createTask();
    }
    if (event.key === "Escape"){
      this.stopCreating();
    }
  }

  toggleComplete(task: ITask): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id!, task).subscribe(() => {
      if (task.completed) {
        // this.tasks = this.tasks.filter(t => t.id !== task.id);
        console.log(task)
      }
    });
  }

  clearCompleted(){
    this.taskService.deleteTask().subscribe(() => {
      this.tasks = this.tasks.filter(task => !task.completed);
      this.stopCreating();
    })
  }

  clearAllTasks(){
    this.taskService.clearAll().subscribe(() => {
      console.log("all clear")
      this.tasks = []
      this.stopCreating();
    })
  }
}
