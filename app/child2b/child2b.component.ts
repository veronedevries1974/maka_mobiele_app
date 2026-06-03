import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-child2b',
  templateUrl: './child2b.component.html',
  styleUrls: ['./child2b.component.scss'],
  standalone: false
})
export class Child2bComponent {
  constructor(private location: Location) {}

  gaTerug(): void {
    this.location.back();
  }
}