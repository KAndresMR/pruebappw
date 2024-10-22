import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks:Array<{name:string, description:string}> = []

  constructor() { 
    // Al inicializar el servicio, cargar las tareas de localStorage (si existen)
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    }
  }

  getTasks() {
    return this.tasks
  }

  addTask(task: {name:string, description:string}) {
    this.tasks.push(task)
    this.updateLocalStorage();
  }

  // Método para actualizar el localStorage cada vez que se modifica el arreglo
  private updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1)
    this.updateLocalStorage()
  }
  
}
