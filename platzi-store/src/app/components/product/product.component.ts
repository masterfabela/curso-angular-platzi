import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClick.emit(this.product.id);
  }
}
