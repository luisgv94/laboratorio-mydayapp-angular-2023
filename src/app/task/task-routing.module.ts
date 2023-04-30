import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { PendingTaskComponent } from './components/pending-task/pending-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: AllTaskComponent,
  },
  {
    path: 'pending',
    component: PendingTaskComponent,
  },
  {
    path: 'completed',
    component: CompletedTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
