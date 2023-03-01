import { Component } from '@angular/core';
import { ResultService } from '../../lib/result.service';
import { City2Service } from '../city2-service.service';

@Component({
  selector: 'app-city2-result',
  templateUrl: './city2-result.component.html',
  styleUrls: []
})
export class City2ResultComponent {
  data: any;
  data2: any;
  result:any;

  constructor(public data1: City2Service, public cData: ResultService) {
    this.data = data1;
    this.data2 = cData.city2;
    
    if (this.data.city2.length == 0) {
      if (this.data2.length != 0) {
        for (let i = 0; i < this.data2.length; i++) {
          let obj = {
            name: this.data2[i].name,
            position: this.data2[i].position,
            vote: this.data2[i].vote,
            edit: this.data2[i].edit
          }
          this.data.city2.push(obj);
        }
      }
    }
    
    
    if(this.data.city2.length==0){
      this.result=false;
    }else if(this.data.city2[0].edit==false){
      this.result=false;
    }else{
      this.result=true;
    }   
    
    
  }
  
  
  
}
