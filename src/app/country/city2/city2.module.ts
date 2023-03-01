import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City2Component } from './city2.component';
import { City2ResultComponent } from './city2-result/city2-result.component';
import { City2Service } from './city2-service.service';



@NgModule({
  declarations: [City2Component, City2ResultComponent],
  imports: [
    CommonModule
  ],
  providers:[City2Service]
})
export class City2Module { }
