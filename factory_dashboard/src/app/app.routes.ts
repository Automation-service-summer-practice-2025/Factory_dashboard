import { Routes } from '@angular/router';
import { StationDetailsComponent } from './pages/station-details/station-details.component';
import { LoadWindowComponent } from './pages/load-window/load-window.component';

export const routes: Routes = [
  {
    path: 'station/:station_id',
    component: StationDetailsComponent
  },
  {
    path: '',
    component: LoadWindowComponent
  }
];
