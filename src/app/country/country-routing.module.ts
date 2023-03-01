import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { City1Component } from './city1/city1.component';
import { City2Component } from './city2/city2.component';
import { City3Component } from './city3/city3.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
