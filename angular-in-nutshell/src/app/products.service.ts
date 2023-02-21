import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = ['A Dildo'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(this.products)
  }
  deleteProduct(productName: string){
    this.products = this.products.filter(p=>p !==productName)
    this.productsUpdated.next(this.products)
  }

  getProducts() {
    return [...this.products];
  }
  constructor() {}
}
