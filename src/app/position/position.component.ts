import { Component } from '@angular/core';
import { DataService } from 'src/library/data.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {
  data: any;

  // Add Delete Update Boxes
  addBox1 = false;
  addBox2 = false;
  addBox3 = false;
  addBox4 = false;
  countryPos: any;
  cityPos: any;
  editCountryIn: any;
  editCityIn: any;
  index1: any;
  index2: any;

  constructor(public serviceData: DataService) {
    this.data = serviceData;
  }

  show1() {
    this.addBox1 = true
  }

  show2() {
    this.addBox2 = true;
  }

  show3(index: any) {
    this.index1 = index;
    this.editCountryIn = this.data.positions.country[index].name;
    this.addBox3 = true;
  }

  show4(index: any) {
    this.index2 = index;
    this.editCityIn = this.data.positions.city[index].name;
    this.addBox4 = true;
  }

  back() {
    this.addBox1 = false;
    this.addBox2 = false;
    this.addBox3 = false;
    this.addBox4 = false;
  }

  addCountryPos() {
    if (this.countryPos == "") {
      alert("Please Enter Position First...");
    } else {
      let obj = { name: this.countryPos, status: 'open', edit: false };
      this.data.positions.country.push(obj);
      this.addBox1 = false;
    }
  }

  addCityPos() {
    if (this.cityPos == "") {
      alert("Please Enter Position First...");
    } else {
      let obj = { name: this.cityPos, status: 'open', edit: false };
      this.data.positions.city.push(obj);
      console.log(obj, "found");

      this.addBox2 = false;
    }
  }

  deleteCountryPos(i: any) {
    this.data.positions.country.splice(i, 1);
    alert("Deleted Successfully...")
  }

  deleteCityPos(i: any) {
    this.data.positions.city.splice(i, 1);
    alert("Deleted Successfully...")
  }

  editCountryPos() {
    if (this.editCountryIn == "") {
      alert("Please Enter Position First...");
    } else {
      this.data.positions.country[this.index1].name = this.editCountryIn;
      this.addBox3 = false;
    }
  }
  editCityPos() {
    if (this.editCityIn == "") {
      alert("Please Enter Position First...");
    } else {
      this.data.positions.city[this.index2].name = this.editCityIn;
      this.addBox4 = false;
    }
  }


}
