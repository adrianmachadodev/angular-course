import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  disabled = false;
  message = '';
  title = '';
  mostrar = false;

  addPerson() {
    this.mostrar = true;
    this.message = 'Persona agregada';
  }

  // event-binding example
  /* modificarTitulo(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  } */
}
