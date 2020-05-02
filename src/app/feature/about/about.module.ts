import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AboutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AboutModule { }
