import { Component } from '@angular/core';
import { DataService } from 'src/library/data.service';
import { ResultService } from '../lib/result.service';

@Component({
  selector: 'app-city3',
  templateUrl: './city3.component.html',
  styleUrls: ['./city3.component.css']
})
export class City3Component {
  data: any;
  serviceData: any;
  result = false;

  constructor(public data1: DataService, public data2: ResultService) {
    this.data = data1;
    this.serviceData = data2;
    if (this.serviceData.city3.length == 0) {
      for (let i = 0; i < this.data.candidates.length; i++) {
        if (this.data.candidates[i].city == 'CityC') {
          let obj = {
            name: this.data.candidates[i].name,
            position: this.data.candidates[i].cityPosition,
            vote: 0,
            edit: this.data.candidates[i].edit
          }
          this.serviceData.city3.push(obj);
        }
      }
    }

    if(this.serviceData.city3.length==0){
      this.result=false;
    }else if(this.serviceData.city3[0].edit==false){
      this.result=false;
    }else{
      this.result=true;
    }
  }
  ngOnInit(): void {

  }

  vote(i: any) {
    this.serviceData.city3[i].vote += 1;
  }
  
  
  
  closeVoting() {
    this.result = true; 
    for(let i=0;i<this.serviceData.city3.length;i++){
      this.serviceData.city3[i].edit=true;
    }
  }
  
}

