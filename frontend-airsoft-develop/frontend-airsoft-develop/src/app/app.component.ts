import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { ProductCacheService } from './services/product-cache.service';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private productCacheService: ProductCacheService
  ) {}

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts(): void {
    this.sharedService.getProducts().subscribe((data: Producto[]) => {
      this.productCacheService.setProducts(data);
      this.sharedService.setProductos(data);
    });
  }
}
