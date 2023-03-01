import { Component } from '@angular/core';
import { ResultService } from '../../lib/result.service';
import { City1Service } from '../city1-service.service';

@Component({
  selector: 'app-city-result',
  templateUrl: './city-result.component.html',
  styleUrls: []
})
export class CityResultComponent {
  data: any;
  data2: any;
  result:any;

  constructor(public data1: City1Service, public cData: ResultService) {
    this.data = data1;
    this.data2 = cData;

    if (this.data.city1.length == 0) {
      if (this.data2.city1.length != 0) {
        for (let i = 0; i < this.data2.city1.length; i++) {
          let obj = {
            name: this.data2.city1[i].name,
            position: this.data2.city1[i].position,
            vote: this.data2.city1[i].vote,
            edit: this.data2.city1[i].edit
          }
          this.data.city1.push(obj);
        }
      }
    }

    
    if(this.data.city1.length==0){
      this.result=false;
    }else if(this.data.city1[0].edit==false){
      this.result=false;
    }else{
        this.result=true;
    }
    

  }


}
