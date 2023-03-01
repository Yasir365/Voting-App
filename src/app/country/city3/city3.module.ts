import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City3Component } from './city3.component';
import { City3ResultComponent } from './city3-result/city3-result.component';
import { City3Servce } from './city3-servce.service';



@NgModule({
  declarations: [City3Component, City3ResultComponent],
  imports: [
    CommonModule
  ],
  providers:[City3Servce]
})
export class City3Module { }
