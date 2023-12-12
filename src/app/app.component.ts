import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,        
        MenuBarComponent,
        SideBarComponent        
    ]
})
export class AppComponent {
  title = 'tribunal';
}
