import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/library/data.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  data :any;
  addBox = false;
  editBox = false;
  addForm!: FormGroup;
  editName = "";
  editCity = "";
  editCountryPos = "";
  editCityPos = "";
  index: any;


  constructor(public serviceData:DataService){
    this.data=serviceData;
  }
 

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        name: new FormControl("", Validators.required),
        city: new FormControl("CityA", Validators.required),
        countryPos: new FormControl("President", Validators.required),
        cityPos: new FormControl("Mayor", Validators.required),
      })

  }

  showAdd() {
    this.addBox = true;
  }

  Back() {
    this.addBox = false;
    this.editBox = false;
  }

  addCandidate() {
    if (this.addForm.invalid) {
      alert("Please Enter All Fields...")
    } else {
      let value = this.addForm.value;
      let obj = {
        name: value.name,
        city: value.city,
        countryPosition: value.countryPos,
        cityPosition: value.cityPos,
        edit: false
      }
      this.data.candidates.push(obj);
      console.log(obj);

      this.addBox = false;
      this.addForm.reset({
        name:"",
        city:"CityA",
        countryPos:"President",
        cityPos:"Mayor"
      });
    }
  }


  showEdit(input: any, i: any) {
    this.index = i;
    this.editName = input.name;
    this.editCity = input.city;
    this.editCountryPos = input.countryPosition;
    this.editCityPos = input.cityPosition;
    this.editBox = true;
  }

  updateCandidate() {
    let array = this.data.candidates;
    array[this.index].name = this.editName;
    array[this.index].city = this.editCity;
    array[this.index].countryPosition = this.editCountryPos;
    array[this.index].cityPosition = this.editCityPos;
    this.editBox = false;
  }

  deleteCandidate(index: any) {
    this.data.candidates.splice(index, 1);
    alert("Candidate Delete Successfully...")
  }
}
