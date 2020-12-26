import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';

  power = 10;
  items = ['nicolas', 'julian', 'perez', 'roberto'];

  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    this.items.push('nuevoItem');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
