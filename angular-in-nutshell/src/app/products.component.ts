import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
productName = 'A Buuble'
isDisabled = true;
products = ['A book', 'A Goat', 'An Apple', 'A Chicken']
isShowing = false;
constructor(){
    setTimeout(()=>{
        this.productName = ""
        this.isDisabled = false;
    },3000)
}

onAddProduct(){
    this.products.push(this.productName)
}

showHide(){
    this.isShowing = !this.isShowing;
}
}
