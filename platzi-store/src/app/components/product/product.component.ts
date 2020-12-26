import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() {
    console.log('1. Constructor');
  }

  ngOnInit(): void {
    console.log('3. On Init');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClick.emit(this.product.id);
  }
}
