import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
  	'BMW', 'Audi', 'Benz'
  ];

  myData() {
  	return 'This is my car! man';
  }

}
