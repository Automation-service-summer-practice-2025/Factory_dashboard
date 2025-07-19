import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-station-details',
  imports: [],
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  stationId!: number;
  stationData: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: APIService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.stationId = +params['id'];
      this.loadStationData();
    });
  }

  loadStationData() {
    this.apiService.getStationById(this.stationId).subscribe({
      next: (data) => {
        this.stationData = data;
        console.log('Station data:', this.stationData);
      },
      error: (err) => {
        console.error('Error fetching station data:', err);
      }
    });
  }
}
