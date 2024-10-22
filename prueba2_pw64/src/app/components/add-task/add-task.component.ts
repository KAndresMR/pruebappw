import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/TASK/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  taskName : string = ''; // Variable para almacenar el nombre de la tarea
  taskDescription : string = '';  // Variable para almacenar la descripción de la tarea

  constructor (private taskService: TaskService) {}

  addTask() {
    if (this.taskName.trim() || this.taskDescription.trim()) {
      this.taskService.addTask({
        name: this.taskName,
        description: this.taskDescription
      });
      this.taskName = ''
      this.taskDescription = ''
    } else {
      console.log("Ingrese los campos por favor.")
    }
  }
}
