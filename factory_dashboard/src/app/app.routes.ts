import { Routes } from '@angular/router';
import { StationDetailsComponent } from './pages/station-details/station-details.component';
import { FactoryMap } from './pages/factory-map/factory-map';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
