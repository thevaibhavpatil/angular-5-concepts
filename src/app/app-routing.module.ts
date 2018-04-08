import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScssComponent } from './scss/scss.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  { path: 'scss', component: ScssComponent },
  { path: 'googlemap', component: GoogleMapComponent }
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
