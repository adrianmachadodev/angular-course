import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() persona: Person | undefined;
  @Input() index: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
