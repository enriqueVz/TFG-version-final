import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {
  subcategory: string = '';
  productos: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subcategory = params['nombreSubcategoria'];
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.sharedService.productos$.subscribe(data => {
      console.log('All products:', data); // Debugging: log all products
      this.productos = data.filter(product => product.subcategoria.nombre.toLowerCase() === this.subcategory.toLowerCase());
      console.log('Filtered products:', this.productos); // Debugging: log filtered products
    });
  }

  formatFileName(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }
}