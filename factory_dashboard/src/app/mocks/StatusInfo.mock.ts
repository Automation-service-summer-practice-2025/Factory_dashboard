import { StatusPanelData } from '../models/status-panel.model';

export const STATUS_INFO_MOCK: StatusPanelData[] = [
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
