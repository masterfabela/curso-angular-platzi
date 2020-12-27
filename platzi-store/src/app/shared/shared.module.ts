import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
})
export class SharedModule {}
