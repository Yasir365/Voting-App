import { Component } from '@angular/core';
import { ResultService } from '../lib/result.service';

@Component({
  selector: 'app-country-result',
  templateUrl: './country-result.component.html',
  styleUrls: ['./country-result.component.css']
})
export class CountryResultComponent {
  serviceData: any;
  result = false;

  constructor(public data2: ResultService) {
    this.serviceData = data2;

    if(this.serviceData.country.length==0){
      this.result=false;
    }else if(this.serviceData.country[0].edit==false){
      this.result=false;
    }else{
        this.result=true;
    }
    
  }



}
