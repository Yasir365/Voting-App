import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City1Component } from './city1.component';
import { CityResultComponent } from './city-result/city-result.component';
import { City1Service } from './city1-service.service';



@NgModule({
  declarations: [City1Component, CityResultComponent],
  imports: [
    CommonModule
  ],
  providers:[City1Service]
})
export class City1Module { }
