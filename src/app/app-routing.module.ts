import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { City1Component } from './country/city1/city1.component';
import { City2Component } from './country/city2/city2.component';
import { City3Component } from './country/city3/city3.component';
import { VoteComponent } from './country/vote/vote.component';
import { PositionComponent } from './position/position.component';
import { ResultComponent } from './country/result/result.component';
import { CountryResultComponent } from './country/country-result/country-result.component';
import { CityResultComponent } from './country/city1/city-result/city-result.component';
import { City2ResultComponent } from './country/city2/city2-result/city2-result.component';
import { City3ResultComponent } from './country/city3/city3-result/city3-result.component';
const routes: Routes = [
  { path: "", component: CandidateComponent },
  { path: "position", component: PositionComponent },
  { path: "country", component: VoteComponent },
  {
    path: "country", children: [
      { path: "fullResult", component: ResultComponent },
      { path: "result", component: CountryResultComponent },
      {
        path:"city1", children:[
          { path: "", component: City1Component },
          {path:"result", component:CityResultComponent}
      ]},
      {
        path:"city2", children:[
          { path: "", component: City2Component },
          {path:"result", component:City2ResultComponent}
      ]},
      {
        path:"city3", children:[
          { path: "", component: City3Component },
          {path:"result", component:City3ResultComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
