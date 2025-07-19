import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station-details',
  imports: [],
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent {
  stationId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.stationId = +params['id'];
      console.log('Station ID:', this.stationId);
    });
  }
}
