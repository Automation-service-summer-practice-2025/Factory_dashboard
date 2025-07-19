export interface MapArea {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: 'rect' | 'poly' | 'circle';
  description?: string;
}

export interface TooltipData {
  title: string;
  description?: string;
}

export interface Position {
  x: number;
  y: number;
}
