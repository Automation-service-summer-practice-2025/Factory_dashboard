export interface MapArea {
  station_id: number;
  station_name: string;
  coords: string;
  shape: 'rect' | 'poly' | 'circle';
  description?: string;
}

export interface TooltipData {
  station_name: string;
  description?: string;
}

export interface Position {
  x: number;
  y: number;
}
