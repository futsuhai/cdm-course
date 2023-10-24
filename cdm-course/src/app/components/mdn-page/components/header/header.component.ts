import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'header'
  }
})
export class HeaderComponent {

  isBurgerIconActive = false;

  toggleBurgerIcon() {
    this.isBurgerIconActive = !this.isBurgerIconActive;
  }
}
