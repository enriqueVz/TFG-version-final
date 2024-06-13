import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'AMOEBA AM-008 M4-CQBR 7" TAN', description: 'This is a longer card with supporting text below as a natural lead-in to additional content.', imageUrl: '../../assets/images/amoeba-am-008-m4-cqbr-7-tan.webp' },
    { id: 2, name: 'Subfusil UCI 35', description: 'This is a longer card with supporting text below as a natural lead-in to additional content.', imageUrl: '../../assets/images/subfusil-uci-35.webp' },
    { id: 3, name: 'AEG ARP 9 G&G', description: 'This is a longer card with supporting text below as a natural lead-in to additional content.', imageUrl: '../../assets/images/aeg-arp-9-gg.webp' }
  ];

  getProducts() {
    return this.products;
  }
}
