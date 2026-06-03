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
    event.preventDefault(); // Voorkomt dat de '#' de pagina herlaadt
    this.menuOpen = !this.menuOpen;
  }

  sluitMenu() {
    this.menuOpen = false;
  }
}