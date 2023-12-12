import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './side-bar.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,    
    MatButtonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @ViewChild('drawer', { static: true })  
  public sidebar!: MatDrawer;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.setDrawer(this.sidebar);
  }
}
