import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../side-bar/side-bar.service';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    templateUrl: './menu-bar.component.html',
    styleUrl: './menu-bar.component.css',
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        SideBarComponent
    ]
})
export class MenuBarComponent {
  constructor(private sidenav: SidenavService) {}
  toggleActive: boolean = false;

  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    //console.log('Clicked this.toggleActive: ' + this.toggleActive);
    this.sidenav.toggle();
    //console.log('Clicked this.sidenav.toggle');
  }

  isHidden: boolean = false;

  badgevisibility() {
    this.isHidden = true;
  }
}
