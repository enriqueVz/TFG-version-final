import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost:8080/api/productos'; // Define your actual API endpoint

  constructor(private http: HttpClient) {} // Inject HttpClient

  private categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  setCategories(categories: string[]): void {
    this.categoriesSubject.next(categories);
  }

  private productosSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  public productos$: Observable<Producto[]> = this.productosSubject.asObservable();

  private subcategoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public subcategories$: Observable<string[]> = this.subcategoriesSubject.asObservable();

  getProducts(): Observable<Producto[]> {
    console.log(`Fetching products from API: ${this.apiUrl}`); // Log API URL
    return this.http.get<Producto[]>(this.apiUrl);
  }

  setProductos(productos: Producto[]): void {
    console.log('Setting products in SharedService:', productos); // Debugging: log products being set
    this.productosSubject.next(productos);
    this.extractSubcategories(productos);
  }

  setSubcategories(subcategories: string[]): void {
    this.subcategoriesSubject.next(subcategories);
  }

  private extractSubcategories(productos: Producto[]): void {
    const subcategorySet = new Set<string>();
    productos.forEach(product => {
      subcategorySet.add(product.subcategoria.nombre);
      console.log(`Extracting subcategory: ${product.subcategoria.nombre}`); // Log each subcategory
    });
    const subcategories = Array.from(subcategorySet);
    this.setSubcategories(subcategories);
    console.log('Extracted subcategories:', subcategories); // Log extracted subcategories
  }
}
