import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusData } from '../../models/status.model';
import { STATUS_INFO_MOCK } from '../../mocks/StatusInfo.mock';
import { Weather } from '../../models/weather.model';
import { WEATHER_MOCK } from '../../mocks/Weather.mock';

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
  weather!: Weather;

  loadStatusInfoMockData() {
    this.statusInfo = [...STATUS_INFO_MOCK];
  }

  loadWeatherMockData() {
    this.weather = { ...WEATHER_MOCK };
  }
}
