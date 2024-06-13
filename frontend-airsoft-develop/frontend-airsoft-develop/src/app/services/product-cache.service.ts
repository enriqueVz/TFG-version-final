import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCacheService {
  private productos: Producto[] = [];

  setProducts(productos: Producto[]): void {
    this.productos = productos;
    console.log('Products set in cache:', this.productos); // Log products when they are set
  }

  getProducts(): Producto[] {
    return this.productos;
  }

  getProductsByCategoria(nombreCategoria: string): Producto[] {
    const filtered = this.productos.filter(producto => {
      console.log(`Product category (${producto.subcategoria.categoria.nombre})`); // Log each product's category
      return producto.subcategoria.categoria.nombre === nombreCategoria;
    });
    console.log(`Products filtered by category (${nombreCategoria}):`, filtered); // Log filtered products by category
    return filtered;
  }

  getProductsBySubcategoria(nombreSubcategoria: string): Producto[] {
    const filtered = this.productos.filter(producto => {
      console.log(`Product subcategory (${producto.subcategoria.nombre})`); // Log each product's subcategory
      return producto.subcategoria.nombre.toLowerCase() === nombreSubcategoria.toLowerCase();
    });
    console.log(`Products filtered by subcategory (${nombreSubcategoria}):`, filtered); // Log filtered products by subcategory
    return filtered;
  }
}
