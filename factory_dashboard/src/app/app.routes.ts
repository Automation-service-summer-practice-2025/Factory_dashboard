import { Routes } from '@angular/router';
import { StationDetailsComponent } from './pages/station-details/station-details.component';
import { HomePageComponent } from './pages/load-window/home-page.component';

export const routes: Routes = [
  {
    path: 'station/:station_id',
    component: StationDetailsComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];
