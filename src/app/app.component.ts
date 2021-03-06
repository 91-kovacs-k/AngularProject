import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  question = "Should mankind colonize the Universe?";

  people: Person[] = [
    {name:"Mr. IQ", voted: false},
    {name:"Ms. Mici", voted: false},
    {name:"Mr. Lángos", voted: false}
  ];


}
