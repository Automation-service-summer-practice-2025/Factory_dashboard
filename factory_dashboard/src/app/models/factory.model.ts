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
  element_id: number;
  element_name: string;
  station_id: number;
  manufacturer: string;
  passport: number;
  factory: number;
  certificate: string;
  interval_check: number;
  last_metrological_control: Date;
  last_check: Date;
  range_measurement: string;
  block_key_status: boolean;
  working_status: boolean;
  checking_date_start: string;
  checking_date_end: string;
  tab_id: "SBPS" | "DZ" | "UnK";
}
