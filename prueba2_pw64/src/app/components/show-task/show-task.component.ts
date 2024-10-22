import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/TASK/task.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/API/api.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss'
})
export class ShowTaskComponent implements OnInit{
  tasks: Array<{ name: string, description: string }> = []

  constructor (private taskService: TaskService, private apiService: ApiService) {

  }

  ngOnInit(): void {
    // Obtener las tareas cuando el componente se inicializa
    this.tasks = this.taskService.getTasks()
    //API
    this.tasks.forEach((task, index) => {
      // Llamar a la API y reemplazar la descripción con la cita aleatoria
      this.apiService.getRandomQuote().subscribe(data => {
        this.tasks[index].description = data.slip.advice;
      });
    });
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index)
    this.tasks = this.taskService.getTasks() // Actualizar la lista de tareas
  }

}
