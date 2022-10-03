import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() createdPerson = new EventEmitter<Person>();

  // nameInput: string = '';
  // surnameInput: string = '';

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('surnameInput') surnameInput!: ElementRef;

  addPerson(): void {
    let person1 = new Person(
      this.nameInput.nativeElement.value,
      this.surnameInput.nativeElement.value
    );
    this.createdPerson.emit(person1);
  }
}
