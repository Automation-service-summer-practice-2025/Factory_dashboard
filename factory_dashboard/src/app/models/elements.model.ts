import { Documents } from "./documents.model";

export interface Elements {
  element_id: number;
  element_name: string;
  station_id: number;
  params: {
    manufacturer: string;
    passport: number;
    factory: number;
    certificate: string;
    interval_check: number;
    last_metrological_control: Date;
    last_check: Date;
    range_measurement: string;
    block_key_status: boolean;
    working_status: boolean
  };
  documents?: Documents[];
}
