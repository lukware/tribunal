import { Injectable } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Injectable({
	providedIn: 'root'
})
export class SidenavService {
	private drawer!: MatDrawer;

	public setDrawer(drawer: MatDrawer) {
		this.drawer = drawer;
	}

	public open() {
		return this.drawer.open();
	}


	public close() {
		return this.drawer.close();
	}

	public toggle(): void {		
		this.drawer.toggle();
		console.log(this.drawer);
	}
}