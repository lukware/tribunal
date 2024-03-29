import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'side-bar', component: SideBarComponent }

  /*{path:'table',component:TableComponent},
    {path:'form',component:FormdesignComponent},
    {path:'associate',component:AssociateComponent}*/
];
