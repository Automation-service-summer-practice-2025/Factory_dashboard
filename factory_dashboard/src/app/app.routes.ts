import { Routes } from '@angular/router';
import { StationDetailsComponent } from './pages/station-details/station-details.component';
import { StationOverviewComponent } from './pages/station-overview/station-overview.component';
import { LoadWindowComponent } from './pages/load-window/load-window.component';

export const routes: Routes = [
  {
    path: 'station/:station_id/:tab_id/:equipment_id',
    component: StationDetailsComponent,
  },
  {
    path: 'station/:station_id',
    component: StationOverviewComponent,
  },
  {
    path: '',
    component: LoadWindowComponent,
  },
];
