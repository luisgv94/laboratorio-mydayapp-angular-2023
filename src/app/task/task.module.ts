import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { PendingTaskComponent } from './components/pending-task/pending-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    TaskComponent,
    PendingTaskComponent,
    CompletedTaskComponent,
    AllTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
  ],
})
export class TaskModule {}
