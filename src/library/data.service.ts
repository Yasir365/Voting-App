import { Injectable } from "@angular/core";


@Injectable()
export class DataService{
    candidates = [
        {
          name: 'Hammad',
          city: 'CityA',
          countryPosition: 'President',
          cityPosition: 'Magistrate',
          edit: false,
        },
        {
          name: 'Imran',
          city: 'CityA',
          countryPosition: 'Vice President',
          cityPosition: 'Mayor',
          edit: false,
        },
        {
          name: 'Saad',
          city: 'CityB',
          countryPosition: 'Vice President',
          cityPosition: 'Magistrate',
          edit: false,
        },
        {
          name: 'Yasir',
          city: 'CityB',
          countryPosition: 'President',
          cityPosition: 'Mayor',
          edit: false,
        },
        {
          name: 'Ahmed',
          city: 'CityC',
          countryPosition: 'President',
          cityPosition: 'Mayor',
          edit: false,
        },
        {
          name: 'Zain',
          city: 'CityC',
          countryPosition: 'Vice President',
          cityPosition: 'Magistrate',
          edit: false,
        }
      ];
    
      positions = {
        city: [
          { name: 'Mayor', status: 'open', edit: false },
          { name: 'Magistrate', status: 'open', edit: false },
        ],
        country: [
          { name: 'President', status: 'open', edit: false },
          { name: 'Vice President', status: 'open', edit: false },
        ],
      };
    
      cities = ['CityA', 'CityB', 'CityC'];
}