import { Component } from '@angular/core';
import { ResultService } from '../../lib/result.service';
import { City3Servce } from '../city3-servce.service';

@Component({
  selector: 'app-city3-result',
  templateUrl: './city3-result.component.html',
  styleUrls: []
})
export class City3ResultComponent {
  data: any;
  data2: any;
  result: any;

  constructor(public data1: City3Servce, public cData: ResultService) {
    this.data = data1;
    this.data2 = cData.city3;

    if (this.data.city3.length == 0) {
      if (this.data2.length != 0) {
        for (let i = 0; i < this.data2.length; i++) {
          let obj = {
            name: this.data2[i].name,
            position: this.data2[i].position,
            vote: this.data2[i].vote,
            edit: this.data2[i].edit
          }
          this.data.city3.push(obj);
        }
      }
    }


    if (this.data.city3.length == 0) {
      this.result = false;
    } else if (this.data.city3[0].edit == false) {
      this.result = false;
    } else {
      this.result = true;
    }


  }
}
