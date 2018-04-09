import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScssComponent } from './scss/scss.component';
import { ScssExamplesComponent } from './scss-examples/scss-examples.component';

const routes: Routes = [
  { path: '', component: ScssExamplesComponent},
  { path: 'scss', component: ScssComponent },
  { path: 'example1', loadChildren: 'app/scss-examples/example1/example1.module#Example1Module'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScssExamplesRoutingModule { }
