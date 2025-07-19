import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { Station } from '../../models/station.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-station-details',
  imports: [CommonModule],
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  station: Station | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: APIService
  ) {}

  ngOnInit(): void {
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    this.loadStationData(stationId);
  }

  loadStationData(stationId: number) {
    this.apiService.getStationById(stationId).subscribe({
      next: (data) => {
        this.station = data;
      },
      error: (err) => {
        console.error('Ошибка загрузки данных установки:', err);
      }
    });
  }

  loadStationMockData(stationId: number) {
    this.station = {
      station_id: 1,
      station_name: "АТ-ВБ",
      station_elements: [
        {
          element_id: 101,
          element_name: "Насос H-21",
          working_status: true,
          checking_date_start: "2024-01-10T09:00:00",
          checking_date_finish: "2024-01-15T17:00:00",
          block_key_status: true
        },
        {
          element_id: 102,
          element_name: "Клапан K-45",
          working_status: true,
          checking_date_start: "2024-02-15T10:00:00",
          checking_date_finish: "2024-02-20T16:00:00",
          block_key_status: false
        },
        {
          element_id: 103,
          element_name: "Датчик Д-12",
          working_status: false,
          checking_date_start: "2024-03-20T11:00:00",
          checking_date_finish: "2024-03-25T15:00:00",
          block_key_status: true
        }
      ]
    };
  }
}
