import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Buuble';

  isDisabled = true;
  products = ['A book', 'A Goat'];
  public productsSubscription: Subscription | undefined;
  isShowing = false;
  buttonText = 'Show!';
  constructor(private productsService: ProductsService) {
    //this is the injection of a service
    setTimeout(() => {
      this.productName = '';
      this.isDisabled = false;
    }, 3000);
  }
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }
  onAddProduct(form: any) {
    if (form.valid) {
      //this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  showHide() {
    this.isShowing = !this.isShowing; //toggle
    this.isShowing ? (this.buttonText = 'Hide!') : (this.buttonText = 'Show!');
  }
  onRemoveProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
  }

  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  }
}
