import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  images = [
    {src: 'assets/images/Image 1.jpg', alt: 'Image 1'},
    {src: 'assets/images/Image 2.jpg', alt: 'Image 2'},
    {src: 'assets/images/Image 3.webp', alt: 'Image 3'}
  ];

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}

