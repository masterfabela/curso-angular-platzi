import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(id: string): void {
    console.log('Product');
    console.log(id);
  }
}
