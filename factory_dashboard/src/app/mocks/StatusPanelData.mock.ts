import { StatusPanelData } from '../models/status-panel.model';
import { WeatherData } from '../models/status-panel.model';

export const WEATHER_DATA_MOCK: WeatherData = {
  temperature: 23.8,
  windSpeed: 2,
  windDirection: 257,
  pressure: 746.8,
};

export const STATUS_PANEL_DATA_MOCK: StatusPanelData[] = [
  {
    title: 'Загазованность',
    numUnquotedEvents: 2,
    numQuotedEvents: 0,
    numDiagnosticEvents: 0,
  },
  {
    title: 'Деблокировочные ключи',
    numUnquotedEvents: 483,
    numQuotedEvents: 0,
    numDiagnosticEvents: 0,
  },
  {
    title: 'Блокировки и сигнализация',
    numUnquotedEvents: 19,
    numQuotedEvents: 0,
    numDiagnosticEvents: 0,
  },
];
