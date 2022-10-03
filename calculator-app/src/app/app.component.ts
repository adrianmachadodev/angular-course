import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-app';
  result: number = 0;
  operadorA: number = 0;
  operadorB: number = 0;

  addResults(): void {
    this.result = this.operadorA + this.operadorB;
  }
}
