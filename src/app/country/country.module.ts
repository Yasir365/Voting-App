import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { VoteComponent } from './vote/vote.component';
import { ResultService } from './lib/result.service';
import { ResultComponent } from './result/result.component';
import { City1Module } from './city1/city1.module';
import { City2Module } from './city2/city2.module';
import { City3Module } from './city3/city3.module';
import { BrowserModule } from '@angular/platform-browser';
import { CountryResultComponent } from './country-result/country-result.component';


@NgModule({
  declarations: [
    VoteComponent,
    ResultComponent,
    CountryResultComponent
  ],
  imports: [
    BrowserModule,
    CountryRoutingModule,
    City1Module,
    City2Module,
    City3Module
  ],
  providers: [ResultService],
  exports: [VoteComponent,ResultComponent]
})
export class CountryModule { }
