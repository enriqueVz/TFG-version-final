import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoService } from './producto.service';
import { SharedService } from './shared.service';
import { Producto } from '../models/producto.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Producto[]> {

  constructor(
    private productoService: ProductoService,
    private sharedService: SharedService
  ) {}

  resolve(): Observable<Producto[]> {
    return this.productoService.getProductos().pipe(
      tap(productos => {
        this.sharedService.setProductos(productos);
      })
    );
  }
}
