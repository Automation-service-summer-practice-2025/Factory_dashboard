export interface StationEquipmentModel {
  id: number;
  stationId: number;
  name: string;
  manufacturer: string;
  passport: number;
  factory_id: number;
  certificate: string;
  interval_check: number;
  last_metrological_control: Date;
  last_check_date: Date;
  range_measurement: string;
  block_key_status: boolean;
  working_status: boolean;
  checking_date_start: string;
  checking_date_finish: string;
}
