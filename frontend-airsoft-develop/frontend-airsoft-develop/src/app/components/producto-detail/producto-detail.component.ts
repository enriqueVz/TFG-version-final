// src/app/components/producto-detail/producto-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  producto!: Producto;
  nombreSubcategoria!: string;
  nombreProducto!: string;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombreSubcategoria = params.get('nombreSubcategoria')!;
      this.nombreProducto = params.get('nombreProducto')!;
      this.getProductoBySubcategoriaAndNombre(this.nombreSubcategoria, this.nombreProducto);
    });
  }

  getProductoBySubcategoriaAndNombre(subcategoria: string, nombre: string): void {
    this.productoService.getProductoBySubcategoriaAndNombre(subcategoria, nombre).subscribe(data => {
      this.producto = data;
    }, error => {
      console.error('Error fetching product:', error);
    });
  }
}
