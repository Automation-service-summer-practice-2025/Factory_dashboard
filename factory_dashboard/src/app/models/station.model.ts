export interface StationElement {
  element_id: number;
  element_name: string;
  working_status: boolean;
  checking_date_start: string;
  checking_date_finish: string;
  block_key_status: boolean;
}

export interface Station {
  station_id: number;
  station_name: string;
  station_elements: StationElement[];
}
