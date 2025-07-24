import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import ImageMap from 'image-map';
import {
  StationModel,
  TooltipData,
  Position,
} from '../../../models/factory.model';
import { STATIONS_DATA_MOCK } from '../../../mocks/StationsData.mock';

@Component({
  selector: 'app-factory-map',
  imports: [CommonModule],
  templateUrl: './factory-map.html',
  styleUrl: './factory-map.css',
})
export class FactoryMap {
  @ViewChild('mapImage') mapImage!: ElementRef<HTMLImageElement>;
  stations!: StationModel[];
  activeTooltip: TooltipData | null = null;
  tooltipPosition: Position = { x: 0, y: 0 };

  ngOnInit(): void {
    this.loadMapMockData();
  }

  ngAfterViewInit() {
    ImageMap('img[usemap]');
  }

  loadMapMockData() {
    this.stations = [...STATIONS_DATA_MOCK];
  }

  // Обработка наведения на область
  onAreaHover(station: StationModel, event: MouseEvent): void {
    this.activeTooltip = {
      station_name: station.name,
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
      y: event.clientY + offset,
    };
  }
}
