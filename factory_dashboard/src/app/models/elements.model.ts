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
  documents?: {
    id: number;
    documentName: string;
    repairType: string;
    plannedStartDate: Date;
    actualStartDate: Date | null;
    plannedEndDate: Date;
    actualEndDate: Date | null;
  }[];
}

/*
API                                   Kirill
"element_id": 101,                  - id
"element_name": "Насос H-21",       - number
"station_id": 1,                    - none    
"params": {                         - manufacturerData
    "manufacturer": "АО Электро-стандарт", - name
    "passport": 7000133318,                - passportNumber
    "factory": 87133,                      - serialNumber
    "certificate": "C-MA/17.01-2024/3094635724", - fgisArshinNumber
    "interval_check": 2,                         - checkInterval
    "last_metrological_control": "2024-01-15T10:00:00", - lastMetroControlDate
    "last_check": "2024-01-15T00:00:00",                - lastCheckDate
    "range_measurement": "0-50% 4КПРC6H14",  - measurementRangeNKPR
    "block_key_status": true,                - status 'Выключен деблок' ! в API boolean
    "working_status": true                   - none - это зеленая или серая плашка в левом меню
},
"documents": null                   - acts
*/
