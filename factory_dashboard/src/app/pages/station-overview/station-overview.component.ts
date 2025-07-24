import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TechDockComponent } from './tech-dock/tech-dock.component';

import {
  StationModel,
  StationEquipmentModel,
} from '../../models/factory.model';
import { STATIONS_DATA_MOCK } from '../../mocks/StationsData.mock';
import { STATION_EQUIPMENTS_DATA_MOCK } from '../../mocks/StationEquipmentsData.mock';

@Component({
  selector: 'app-station-overview',
  imports: [CommonModule, TechDockComponent],
  templateUrl: './station-overview.component.html',
  styleUrls: ['./station-overview.component.css'],
})
export class StationOverviewComponent implements OnInit {
  station: StationModel | null = null;
  stationEquipment: StationEquipmentModel[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  activeTab: string = 'SBPS';
  tabs = [
    { id: 'SBPS', name: 'СБиПАЗ' },
    { id: 'DZ', name: 'ДЗ' },
    { id: 'UnK', name: 'Деблокир. ключи' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    this.loadMockData(stationId);
  }

  loadMockData(stationId: number) {
    this.station =
      STATIONS_DATA_MOCK.find((station) => station.id === stationId) || null;
    this.filterEquipmentByTab(stationId);
  }

  filterEquipmentByTab(stationId: number) {
    this.stationEquipment = STATION_EQUIPMENTS_DATA_MOCK.filter((equipment) => {
      return (
        equipment.stationId === stationId &&
        equipment.tabType === this.activeTab
      );
    });
    this.currentPage = 1;
  }

  get totalPages(): number {
    return Math.ceil(this.stationEquipment.length / this.itemsPerPage);
  }

  get paginatedEquipments(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.stationEquipment.slice(
      startIndex,
      startIndex + this.itemsPerPage,
    );
  }

  getPages(): (number | string)[] {
    const total = this.totalPages;
    const current = this.currentPage;

    const edgeCount = 5;
    const aroundCurrent = 3;

    const pages: (number | string)[] = [];

    if (total <= edgeCount * 2 + aroundCurrent * 2) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
      return pages;
    }

    const addPage = (val: number | string) => {
      if (pages.length === 0 || pages[pages.length - 1] !== val) {
        pages.push(val);
      }
    };

    // 1. Начальные страницы
    for (let i = 1; i <= edgeCount; i++) {
      addPage(i);
    }

    // 2. Средние страницы
    const startMiddle = Math.max(current - aroundCurrent, edgeCount + 1);
    const endMiddle = Math.min(current + aroundCurrent, total - edgeCount);

    if (startMiddle > edgeCount + 1) {
      addPage('...');
    }

    for (let i = startMiddle; i <= endMiddle; i++) {
      addPage(i);
    }

    if (endMiddle < total - edgeCount) {
      addPage('...');
    }

    // 3. Конечные страницы
    for (let i = total - edgeCount + 1; i <= total; i++) {
      addPage(i);
    }

    return pages;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: string | number): void {
    if (typeof page === 'number') {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToElementDetails(equipmentId: number): void {
    this.router.navigate([
      `/station/${this.station?.id}/${this.activeTab}/${equipmentId}`,
    ]);
  }

  switchTab(tabId: string) {
    this.activeTab = tabId;
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    this.filterEquipmentByTab(stationId);
  }
}
