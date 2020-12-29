import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  products: Product[];

  constructor(private cardService: CartService) {}

  ngOnInit(): void {
    this.cardService.cart$.subscribe((products) => {
      this.products = products;
    });
  }
}
