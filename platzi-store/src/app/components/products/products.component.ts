import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clickProduct(id: string): void {
    console.log('Product');
    console.log(id);
  }
}
