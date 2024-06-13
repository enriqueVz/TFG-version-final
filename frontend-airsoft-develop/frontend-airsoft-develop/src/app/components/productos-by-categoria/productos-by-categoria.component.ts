import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos-by-categoria',
  templateUrl: './productos-by-categoria.component.html',
  styleUrls: ['./productos-by-categoria.component.css']
})
export class ProductosByCategoriaComponent implements OnInit {

  productos: Producto[] = [];
  nombreCategoria!: string;

  constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombreCategoria = params.get('nombreCategoria')!;
      this.getProductosByCategoriaNombre(this.nombreCategoria);
    });
  }

  getProductosByCategoriaNombre(nombreCategoria: string): void {
    this.categoriaService.getProductosByCategoriaNombre(nombreCategoria).subscribe(data => {
      this.productos = data;
      console.log('Filtered products:', this.productos); // Debugging log
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
}
