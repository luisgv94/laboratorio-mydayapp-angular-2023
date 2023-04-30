import { Injectable } from '@angular/core';
import { StatusTask } from '../enums/statusTask';
import { LocalStorageService } from './local-storage.service';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storageService: LocalStorageService) {}

  createTask(title: string): void {
    let newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.storageService.saveTaskInStorage(newTask);
  }

  getTaks(): Task[] {
    return this.storageService.getTasksFromStorage;
  }

  getThereIsTasks(): boolean {
    return this.storageService.thereIsTask;
  }

  changeStatus(task: Task) {
    this.storageService.updateTask(task);
  }

  deleteTask(id: string) {
    this.storageService.deleteTask(id);
  }

  deleteCompletedTaks() {
    this.storageService.deleteCompletedTaks();
  }

  filterTasks(filter: StatusTask): Task[] {
    return this.storageService.filterTask(filter);
  }

  amountOfPendingTasks(): number {
    return this.storageService.amountOfPendingTasks;
  }

  amountOfCompletedTasks(): number {
    return this.storageService.amountOfCompletedTasks;
  }
}
