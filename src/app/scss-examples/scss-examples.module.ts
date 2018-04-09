import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScssExamplesRoutingModule } from './scss-examples-routing.module';
import { ScssComponent } from './scss/scss.component';
import { ScssExamplesComponent } from './scss-examples/scss-examples.component';

@NgModule({
  imports: [
    CommonModule,
    ScssExamplesRoutingModule
  ],
  declarations: [
    ScssComponent,
    ScssExamplesComponent
  ]
})
export class ScssExamplesModule { }
