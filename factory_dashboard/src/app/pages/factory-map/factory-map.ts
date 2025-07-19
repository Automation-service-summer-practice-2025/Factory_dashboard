import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import ImageMap from "image-map";

interface MapArea {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: 'rect' | 'poly' | 'circle';
  description?: string;
}

interface TooltipData {
  title: string;
  description?: string;
}

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-factory-map',
  imports: [ CommonModule ],
  templateUrl: './factory-map.html',
  styleUrl: './factory-map.css'
})
export class FactoryMap {
  @ViewChild('mapImage') mapImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    ImageMap('img[usemap]');
  }

  // Конфигурация областей карты
  mapAreas: MapArea[] = [
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
}
