import { Routes } from '@angular/router';
import { StationDetailsComponent } from './pages/station-details/station-details.component';

export const routes: Routes = [
{
    path: 'station/:id',
    component: StationDetailsComponent
  },
];
