import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct(): void {
    const newProduct: Partial<Product> = {
      price: 555555,
      description: 'edicion titulo',
    };
    this.productsService
      .updateProduct('222', newProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct(id): void {
    this.productsService.deleteProduct(id).subscribe((product) => {
      console.log(product);
    });
  }
}
