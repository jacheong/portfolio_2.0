import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './components/circle/circle.component';



@NgModule({
  declarations: [CircleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CircleComponent
  ]
})
export class CircleModule { }
