import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.adviceslip.com/advice';  // URL de la API

  constructor(private httpClient: HttpClient) { }

  // Método para obtener una cita aleatoria desde la API
  getRandomQuote(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl)
  }
}
