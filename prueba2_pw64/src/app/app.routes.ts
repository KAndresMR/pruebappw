import { Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';

export const routes: Routes = [

    { path: 'add_task', component: AddTaskComponent },
    { path: 'show_task', component: ShowTaskComponent },

];
