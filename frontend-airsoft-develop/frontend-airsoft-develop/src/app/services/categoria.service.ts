import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categoria } from '../models/categoria.model';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProductosByCategoriaNombre(nombreCategoria: string): Observable<Producto[]> {
    const url = `${this.apiUrl}/nombre/${nombreCategoria}/productos`;
    return this.http.get<Producto[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getProductosByCategoriaId(idCategoria: number): Observable<Producto[]> {
    const url = `${this.apiUrl}/${idCategoria}/productos`;
    return this.http.get<Producto[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
