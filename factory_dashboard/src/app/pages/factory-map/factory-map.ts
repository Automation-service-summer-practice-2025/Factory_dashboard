import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import ImageMap from "image-map";
import { APIService } from '../../services/api.service';
import { MapArea, TooltipData, Position } from '../../models/factory.model'

@Component({
  selector: 'app-factory-map',
  imports: [ CommonModule ],
  templateUrl: './factory-map.html',
  styleUrl: './factory-map.css'
})
export class FactoryMap {
  @ViewChild('mapImage') mapImage!: ElementRef<HTMLImageElement>;

  ngOnInit(): void {
    // this.loadMapData();
    this.loadMapMockData()
  }

  ngAfterViewInit() {
    ImageMap('img[usemap]');
  }

  constructor (private apiService: APIService) {}

  mapAreas!: MapArea[];

  loadMapData() {
    this.apiService.getStations().subscribe({
      next: (data) => {
        this.mapAreas = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных установки:', err);
      }
    });
  }

  loadMapMockData() {
    this.mapAreas = [
    {
      station_id: 1,
      station_name: 'ВЗП',
      coords: '2072,1210,1939,1391',
      shape: 'rect',
      description: 'Описание станции ВЗП...',
    },
    {
      station_id: 2,
      station_name: 'АТ-ВБ',
      coords: '976,1272,978,1334,932,1340,927,1383,762,1388,765,1299,859,1299,859,1272',
      shape: 'poly',
      description: 'Описание станции АТ-ВБ...'
    },
    {
      station_id: 3,
      station_name: 'ЭЛОУ АВТ-6',
      coords: '1022,1432,1306,1559',
      shape: 'rect',
      description: 'Описание станции ЭЛОУ АВТ-6...'
    }
  ];
  }

  activeTooltip: TooltipData | null = null;
  tooltipPosition: Position = { x: 0, y: 0 };

  // Обработка наведения на область
  onAreaHover(area: MapArea, event: MouseEvent): void {
    this.activeTooltip = {
      station_name: area.station_name,
      description: area.description
    };
    this.updateTooltipPosition(event);
  }

  // Скрытие тултипа
  onAreaLeave(): void {
    this.activeTooltip = null;
  }

  // Обновление позиции тултипа
  onMouseMove(event: MouseEvent): void {
    if (this.activeTooltip) {
      this.updateTooltipPosition(event);
    }
  }

  private updateTooltipPosition(event: MouseEvent): void {
    const offset = 15;
    this.tooltipPosition = {
      x: event.clientX + offset,
      y: event.clientY + offset
    };
  }
}
