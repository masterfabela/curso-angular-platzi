import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez', 'roberto'];

  addItem(): void {
    this.items.push('nuevoItem');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
