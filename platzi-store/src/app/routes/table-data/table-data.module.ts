import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDataRoutingModule } from './table-data-routing.module';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [TableDataComponent],
  imports: [CommonModule, TableDataRoutingModule, MaterialModule],
})
export class TableDataModule {}
