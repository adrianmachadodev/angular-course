import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'modularization-calculator-app';
  resultsTotal: number = 0;

  resultNumber(number: number) {
    this.resultsTotal = number;
  }
}
