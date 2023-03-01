import { Component } from '@angular/core';
import { ResultService } from '../lib/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  data: any;
  country = false;
  city1 = false;
  city2 = false;
  city3 = false;

  constructor(public data1: ResultService) {
    this.data = data1;

    if (this.data.country.length != 0) {
      if (this.data.country[0].edit == true) {
        this.country = true
      }
    }

    if (this.data.city1.length != 0) {
      if (this.data.city1[0].edit == true) {
        this.city1 = true
      }
    }

    if (this.data.city2.length != 0) {
      if (this.data.city2[0].edit == true) {
        this.city2 = true
      }
    }

    if (this.data.city3.length != 0) {
      if (this.data.city3[0].edit == true) {
        this.city3 = true
      }
    }

  }
}
