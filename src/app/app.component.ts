import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <h1 [class]="titleClass">Hello!!!</h1>
  <p>{{myObject.location}}</p>
  <ul>
  	<li *ngIf="myArr == 'go'; then tmpl1 else othertmpl"></li>
  </ul>

  <ng-template #tmpl1>Yo, I am there!</ng-template>
  <ng-template #othertmpl>No, Bro!!!</ng-template>

  <img [src]="angularLogo">

  <button [disabled]="buttonStatus">My button</button>
  <button (mouseenter)="myEvent($event)">What's there?</button>

  <p>{{ someProperty }}</p>

  <p [@myAwesomeAnimation]='state' (mouseenter)="animateMe()">I will animate.</p>

  `,
  styles: [`
  	h1 {
  		text-decoration:underline;
  	}

  	.red-title {
  		color:red;
  	}

    p {
      width:200px;
      background:lightgray;
      margin: 100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }

  `],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('1000ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateY(-75%)', offset: 1}),
        ]))),
      ]),
  ]
})
export class AppComponent {

  state:string = 'small';

  constructor(private dataService:DataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

  myObject = {
  	gender: 'male',
  	age: 22,
  	location: 'India'
  }
  myArr = 'go';

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

  buttonStatus = false;

  myEvent(event) {
  	console.log(event);
  }

  titleClass = 'red-title';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}