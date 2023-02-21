import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName: any;
  @Output() productClicked = new EventEmitter();

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  onClicked() {
    // this.productClicked.emit()
    this.productService.deleteProduct(this.productName);
  }
}
