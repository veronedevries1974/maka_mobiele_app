import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importeer de Location service

@Component({
  selector: 'app-child2a',
  templateUrl: './child2a.component.html',
  styleUrls: ['./child2a.component.scss'],
  standalone: false
})
export class Child2aComponent {
  
  // Injecteer de service via de constructor
  constructor(private location: Location) {}

  // Deze functie stuurt de gebruiker terug
  gaTerug(): void {
    this.location.back();
  }
}