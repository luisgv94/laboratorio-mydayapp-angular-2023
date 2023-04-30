import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatusTask } from 'src/app/enums/statusTask';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: Task[] = [];
  form: FormControl = new FormControl();
  todoCounter: number = 0;
  todoCounterCompleted = 0;
  filter: StatusTask = StatusTask.ALL;
  idEdit: string = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('filter')
  set setFilter(statusTask: StatusTask) {
    if (statusTask) {
      this.filter = statusTask;
      this.filterTask(this.filter);
    }
  }

  constructor(public taskService: TaskService) {}

  addTask(): void {
    if (this.form.value) {
      this.taskService.createTask(this.form.value.trim());
      this.filterTask(this.filter);
      this.form.reset();
    }
  }

  changeStatusOrTitle(task: Task, changeStatus: boolean = false) {
    if (changeStatus) {
      task.completed = !task.completed;
    }
    if (task.title && task.title.length > 0) {
      task.title = task.title.trim();
    }
    this.taskService.changeStatus(task);
    this.idEdit = '';
    this.filterTask(this.filter);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.filterTask(this.filter);
  }

  deleteTaskCompletedTask() {
    this.taskService.deleteCompletedTaks();
    this.filterTask(this.filter);
  }

  filterTask(filter: StatusTask): void {
    this.tasks = [...this.taskService.filterTasks(filter)];
    this.todoCounter = this.taskService.amountOfPendingTasks();
    this.todoCounterCompleted = this.taskService.amountOfCompletedTasks();
  }

  activeEditMode(id: string) {
    this.idEdit = id;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.idEdit = ';';
    }
  }
}
