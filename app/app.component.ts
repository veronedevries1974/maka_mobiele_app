import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  // Standaard staan de subknoppen ingeklapt (false)
  menuOpen: boolean = false;

  constructor() {}

  // Wisselt tussen open en dicht bij een klik op activiteiten
  toggleMenu(event: Event): void {
    this.menuOpen = !this.menuOpen;
  }

  // Sluit het menu direct bij selectie van een pagina
  sluitMenu(): void {
    this.menuOpen = false;
  }
}