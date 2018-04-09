import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example1RoutingModule } from './example1-routing.module';
import { Example1Component } from './example1/example1.component';

@NgModule({
  imports: [
    CommonModule,
    Example1RoutingModule
  ],
  declarations: [Example1Component]
})
export class Example1Module { }
