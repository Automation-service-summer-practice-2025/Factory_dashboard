import { Routes } from '@angular/router';
import { SideBarComponent } from './side-bar.component/side-bar.component';
import { StationDetailsComponent } from './pages/station-details/station-details.component';
import { LoadWindowComponent } from './pages/load-window/load-window.component';

export const routes: Routes = [
  {
    path: 'station/:station_id/:element_id',
    component: SideBarComponent,
  },
  {
    path: 'station/:station_id',
    component: StationDetailsComponent,
  },
  {
    path: '',
    component: LoadWindowComponent,
  },
];
