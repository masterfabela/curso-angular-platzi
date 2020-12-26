import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, FormsModule, SharedModule],
})
export class DemoModule {}
