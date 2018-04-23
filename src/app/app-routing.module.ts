import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  { path: 'googlemap', component: GoogleMapComponent },
  { path: 'scssexamples', loadChildren: 'app/scss-examples/scss-examples.module#ScssExamplesModule'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
