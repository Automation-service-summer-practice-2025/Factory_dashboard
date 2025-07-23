import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  STATUS_PANEL_DATA_MOCK,
  WEATHER_DATA_MOCK,
} from '../../mocks/StatusPanelData.mock';
import { WeatherData, StatusPanelData } from '../../models/status-panel.model';

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

  statusInfo!: StatusPanelData[];
  weatherData!: WeatherData;

  loadStatusInfoMockData() {
    this.statusInfo = [...STATUS_PANEL_DATA_MOCK];
  }

  loadWeatherMockData() {
    this.weatherData = { ...WEATHER_DATA_MOCK };
  }
}
