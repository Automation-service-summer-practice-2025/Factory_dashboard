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
    },
    {
      station_id: 4,
      station_name: 'Комплексная установка переработки нефти',
      coords: '1033,1204,1512,1399',
      shape: 'rect',
      description: undefined
    },
    {
      station_id: 5,
      station_name: 'Г-43-107',
      coords: '765,877,946,1053',
      shape: 'rect',
      description: 'Описание Г-43-107...'
    },
    {
      station_id: 6,
      station_name: 'Установка изомеризации',
      coords: '2234,1009,1945,912',
      shape: 'rect',
      description: 'Описание установки изомеризации...'
    },
    {
      station_id: 7,
      station_name: 'ЛЧ-24-2000',
      coords: '2248,1164,2113,1061',
      shape: 'rect',
      description: 'Описание ЛЧ-24-2000...'
    },
    {
      station_id: 8,
      station_name: 'ЛЧ-35/11-1000',
      coords: '2243,1356,2102,1204',
      shape: 'rect',
      description: 'Описание ЛЧ-35/11-1000...'
    },
    {
      station_id: 9,
      station_name: 'КЦА',
      coords: '1720,1210,1877,1272',
      shape: 'rect',
      description: 'Описание КЦА...'
    },
    {
      station_id: 10,
      station_name: 'ЛЧ-24/5',
      coords: '1874,1156,1628,1042',
      shape: 'rect',
      description: 'Описание ЛЧ-24/5...'
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
