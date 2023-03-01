import { Component } from '@angular/core';
import { DataService } from 'src/library/data.service';
import { ResultService } from '../lib/result.service';

@Component({
  selector: 'app-city1',
  templateUrl: './city1.component.html',
  styleUrls: ['./city1.component.css']
})
export class City1Component {
  data: any;
  serviceData: any;
  result = false;

  constructor(public data1: DataService, public data2: ResultService) {
    this.data = data1;
    this.serviceData = data2;
    if (this.serviceData.city1.length == 0) {
      for (let i = 0; i < this.data.candidates.length; i++) {
        if (this.data.candidates[i].city == 'CityA') {
          let obj = {
            name: this.data.candidates[i].name,
            position: this.data.candidates[i].cityPosition,
            vote: 0,
            edit: false,
          }
          this.serviceData.city1.push(obj);
        }
      }
    }

    if(this.serviceData.city1[0].edit==false){
      this.result=false;
    }else{
      this.result=true;
    }
  }
  ngOnInit(): void {

  }

  vote(i: any) {
    this.serviceData.city1[i].vote += 1;
  }


  closeVoting() {
    this.result = true; 
    for(let i=0;i<this.serviceData.city1.length;i++){
      this.serviceData.city1[i].edit=true;
    }
  }

}
