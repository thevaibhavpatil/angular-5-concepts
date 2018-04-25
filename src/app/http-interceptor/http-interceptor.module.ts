import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpInterceptorRoutingModule } from './http-interceptor-routing.module';
import { HttpInterceptorComponent } from './http-interceptor.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpInterceptorRoutingModule,
    HttpClientModule
  ],
  declarations: [HttpInterceptorComponent, InterceptorComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
})
export class HttpInterceptorModule { }
