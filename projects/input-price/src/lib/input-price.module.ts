import { NgModule } from '@angular/core';
import { InputPriceComponent } from './input-price.component';
import { InputPriceDirective } from './input-price.directive';



@NgModule({
  declarations: [
    InputPriceComponent,
    InputPriceDirective
  ],
  imports: [
  ],
  exports: [
    InputPriceComponent,
    InputPriceDirective
  ]
})
export class InputPriceModule { }
