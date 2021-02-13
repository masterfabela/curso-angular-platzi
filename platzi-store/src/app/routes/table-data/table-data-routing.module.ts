import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDataComponent } from './components/table-data/table-data.component';

const routes: Routes = [
  {
    path: '',
    component: TableDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableDataRoutingModule {}
