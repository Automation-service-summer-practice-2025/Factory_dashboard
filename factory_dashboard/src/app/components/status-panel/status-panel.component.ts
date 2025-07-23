import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusData } from '../../models/status.model';
import { STATUS_INFO_MOCK } from '../../mocks/StatusInfo.mock';
import { WeatherData } from '../../models/status-panel.model';
import { WEATHER_DATA_MOCK } from '../../mocks/StatusPanel.mock';

@Component({
  selector: 'app-status-panel',
  imports: [CommonModule],
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.css',
})
export class StatusPanelComponent {
  ngOnInit(): void {
    this.loadStatusInfoMockData();
    this.loadWeatherMockData();
  }

  statusInfo!: StatusData[];
  weatherData!: WeatherData;

  loadStatusInfoMockData() {
    this.statusInfo = [...STATUS_INFO_MOCK];
  }

  loadWeatherMockData() {
    this.weatherData = { ...WEATHER_DATA_MOCK };
  }
}
