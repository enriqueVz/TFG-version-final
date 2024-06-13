// src/app/services/fabricante.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fabricante } from '../models/fabricante.model';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {
  private apiUrl = 'http://localhost:8080/api/fabricantes';

  constructor(private http: HttpClient) { }

  getFabricantes(): Observable<Fabricante[]> {
    return this.http.get<Fabricante[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle error appropriately
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
