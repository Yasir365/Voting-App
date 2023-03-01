import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/library/data.service';
import { ResultService } from '../lib/result.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  data: any;
  serviceData: any;
  result =false;

  constructor(public data1: DataService, public data2: ResultService) {
    this.data = data1;
    this.serviceData = data2;
    if (this.serviceData.country.length == 0) {
      for (let i = 0; i < this.data.candidates.length; i++) {
        let obj = {
          name: this.data.candidates[i].name,
          position: this.data.candidates[i].countryPosition,
          vote: 0,
          edit: this.data.candidates[i].edit
        }
        this.serviceData.country.push(obj);
      }
    }

    if(this.serviceData.country[0].edit==false){
      this.result=false;
    }else{
      this.result=true;
    }
  }
  ngOnInit(): void {

  }

  vote(i: any) {
    this.serviceData.country[i].vote += 1;
  }
  
  
  closeVoting() {
    this.result = true;
    for(let i=0;i<this.serviceData.country.length;i++){
      this.serviceData.country[i].edit=true;
    }
  }


}
