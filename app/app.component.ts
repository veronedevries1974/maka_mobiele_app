import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  menuOpen: boolean = false;

  constructor() {}

  toggleMenu(event: Event) {
    event.stopPropagation();
    // Alleen de status omdraaien, we forceren hier GEEN navigatie
    this.menuOpen = !this.menuOpen;
  }

  sluitMenu() {
    // Zorgt ervoor dat als je op home, prijslijst of child3 klikt, het submenu netjes sluit
    this.menuOpen = false;
  }
} 