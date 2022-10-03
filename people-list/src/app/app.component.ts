import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'people-list';
  person: Person[] = [
    new Person('juan', 'Perez'),
    new Person('Laura', 'Juarez'),
    new Person('Karla', 'lara'),
  ];

  addPerson(persona: Person) {
    this.person.push(persona);
  }
}
