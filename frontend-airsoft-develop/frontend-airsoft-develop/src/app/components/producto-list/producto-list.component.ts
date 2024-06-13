import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductCacheService } from '../../services/product-cache.service';
import { SharedService } from '../../services/shared.service';
import { Producto } from '../../models/producto.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
  filteredProducts: Producto[] = [];
  paginatedProducts: Producto[] = [];
  categories: string[] = []; // Array to store unique categories
  subcategories: string[] = []; // Array to store unique subcategories
  selectedSubcategory: string = ''; // Variable to store the selected subcategory
  pageSize = 6;
  currentPage = 0;

  constructor(
    private productoService: ProductoService,
    private productCacheService: ProductCacheService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.extractCategories();
      this.extractSubcategories();
      this.filterProducts();
      this.paginate();
      this.productCacheService.setProducts(data);
      this.sharedService.setProductos(data);
      console.log('Fetched products:', data); // Add this line for debugging
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.paginate();
  }

  paginate(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  extractCategories(): void {
    const categorySet = new Set<string>();
    this.productos.forEach(product => {
      categorySet.add(product.subcategoria.categoria.nombre);
    });
    this.categories = Array.from(categorySet);
  }

  extractSubcategories(): void {
    const subcategorySet = new Set<string>();
    this.productos.forEach(product => {
      subcategorySet.add(product.subcategoria.nombre);
    });
    this.subcategories = Array.from(subcategorySet);
  }

  filterProducts(): void {
    if (this.selectedSubcategory) {
      this.filteredProducts = this.productos.filter(product => product.subcategoria.nombre === this.selectedSubcategory);
    } else {
      this.filteredProducts = this.productos;
    }
    this.paginate();
  }

  onSubcategoryChange(): void {
    this.filterProducts();
  }

  formatFileName(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }
}
