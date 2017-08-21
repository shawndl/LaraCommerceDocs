import { Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public showMobileMenu: boolean;
  constructor() { }

  ngOnInit() {
    this.setShowMobile();
  }

  public onResize(): void {
    this.setShowMobile();
  }

  public toggleMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  private setShowMobile(): void {
    this.showMobileMenu = (window.innerWidth < 1008);
  }

}
