import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from '../../services/api.service'
import { StatusData } from '../../models/status.model';
import { STATUS_INFO_MOCK } from '../../mocks/StatusInfo.mock';
import { Weather } from '../../models/weather.model';
import { WEATHER_MOCK } from '../../mocks/Weather.mock';

@Component({
  selector: 'app-status-panel',
  imports: [CommonModule],
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.css'
})
export class StatusPanelComponent {

  ngOnInit(): void {
    // this.loadStatusInfoData();
    this.loadStatusInfoMockData();
    // this.loadWeatherData();
    this.loadWeatherMockData();
  }

  constructor (private apiService: APIService) {}

  statusInfo!: StatusData [];
  weather!: Weather;

  loadStatusInfoData() {
    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.statusInfo = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных:', err);
      }
    });
  }

  loadStatusInfoMockData() {
    this.statusInfo = [...STATUS_INFO_MOCK];
  }

  loadWeatherData() {
    this.apiService.getWeather().subscribe({
      next: (data) => {
        this.weather = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных:', err);
      }
    });
  }

  loadWeatherMockData() {
    this.weather = {...WEATHER_MOCK};
  }
}
