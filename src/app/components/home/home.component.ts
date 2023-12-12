import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from '../search/search.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SearchComponent, SideBarComponent, MatIconModule, MenuBarComponent],
})
export class HomeComponent {}
