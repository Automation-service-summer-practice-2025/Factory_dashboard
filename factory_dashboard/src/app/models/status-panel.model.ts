export interface WeatherData {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
}

export interface StatusPanelData {
  title: string;
  // Неквитированные события (неподтвержденные)
  numUnquotedEvents: number;
  // Квитированные события (подтверждены)
  numQuotedEvents: number;
  // События в диагностике
  numDiagnosticEvents: number;
}
