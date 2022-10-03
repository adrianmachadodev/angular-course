import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() numbers = new EventEmitter<number>();
  
  operatorA: number = 0;
  operatorB: number = 0;
  results: number = 0;

  addNumbers() {
    this.results = this.operatorA + this.operatorB;
    this.numbers.emit(this.results);
    console.log(this.results);
  }
}
