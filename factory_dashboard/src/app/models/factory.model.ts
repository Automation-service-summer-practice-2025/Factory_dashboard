export interface TooltipData {
  station_name: string;
  description?: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface StationModel {
  id: number;
  name: string;
  coordinates: string;
  shape: string;
  factoryId: number;
}

export interface StationEquipmentModel {
  id: number;
  name: string;
  stationId: number;
  manufacturer: string;
  passport: number;
  factory: number;
  certificate: string;
  intervalCheck: number;
  lastMetrologicalControl: Date;
  lastCheck: Date;
  rangeMeasurement: string;
  blockKeyStatus: boolean;
  workingStatus: boolean;
  checkingDateStart: string;
  checkingDateEnd: string;
  tabType: 'SBPS' | 'DZ' | 'UnK';
}
