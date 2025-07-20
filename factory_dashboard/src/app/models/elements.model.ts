import { Documents } from "./documents.model";

export interface Position {
  id: number;
  number: string;
  status: string;
  lastMetroControlDate: Date;
  nextMetroControlDate: Date;
  lastCheckDate: Date;
  manufacturerData: {
    name: string;
    passportNumber: string;
    serialNumber: string;
    // country: string;
    // productionDate: Date;
    // isImported: boolean;
    // dimensions: string;
    // weight: string;
  };
  fgisArshinNumber: string;
  checkInterval: string;
  measurementRangeNKPR: string;
  acts: {
    id: number;
    documentName: string;
    repairType: string;
    plannedStartDate: Date;
    actualStartDate: Date | null;
    plannedEndDate: Date;
    actualEndDate: Date | null;
  }[];
}

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
