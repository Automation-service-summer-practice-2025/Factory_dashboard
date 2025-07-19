import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import ImageMap from "image-map";
import { APIService } from '../../services/api.service';
import { MapArea, TooltipData, Position } from '../../models/factory.model'
import { StatusPanelComponent } from '../status-panel/status-panel.component';

@Component({
  selector: 'app-factory-map',
  imports: [ CommonModule, StatusPanelComponent ],
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
      alt: 'ВЗП',
      title: 'ВЗП: Входная зона переработки',
      href: 'station/:1',
      coords: '2072,1210,1939,1391',
      shape: 'rect',
      description: 'Описание станции ВЗП...'
    },
    {
      alt: 'АТ-ВБ',
      title: 'АТ-ВБ: Автоматическая транспортировка',
      href: 'station/:2',
      coords: '976,1272,978,1334,932,1340,927,1383,762,1388,765,1299,859,1299,859,1272',
      shape: 'poly',
      description: 'Описание станции АТ-ВБ...'
    },
    {
      alt: 'ЭЛОУ АВТ-6',
      title: 'ЭЛОУ АВТ-6: Электродегидрационная установка',
      href: 'station/:3',
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
      title: area.title,
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

    statusBlocks = [
  {
    title: 'Загазованность',
    notAck: 2,
    ack: 0,
    diag: 0,
    status: 'gas'
  },
  {
    title: 'Деблокировочные ключи',
    notAck: 483,
    ack: 0,
    diag: 0,
    status: 'keys'
  },
  {
    title: 'Пожарная сигнализация',
    notAck: 2,
    ack: 0,
    diag: 0,
    status: 'fire'
  },
  {
    title: 'Блокировки и сигнализация',
    notAck: 19,
    ack: 0,
    diag: 0,
    status: 'block'
  }
  ];
}
