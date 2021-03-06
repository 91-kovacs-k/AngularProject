import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  items = ['item1', 'item2', 'item3', 'item4', 'alma'];

  people = [
    { name: 'Józsi', age: '23', color: 'blue' },
    { name: 'Bertalan', age: '65', color: 'green' },
    { name: 'Viktória', age: '35', color: 'yellow' }
  ];

  removeFromList() {
    this.items.pop();
  }

  removeFromTable() {
    this.people.shift();
  }
}

