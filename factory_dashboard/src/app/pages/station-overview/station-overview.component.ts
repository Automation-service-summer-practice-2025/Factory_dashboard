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
        equipment.station_id === stationId &&
        equipment.tab_id === this.activeTab
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

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToElementDetails(equipmentId: number): void {
    this.router.navigate([`/station/${this.station?.id}/${equipmentId}`]);
  }

  activeTab: string = 'SBPS';

  tabs = [
    { id: 'SBPS', name: 'СБиПАЗ' },
    { id: 'DZ', name: 'ДЗ' },
    { id: 'UnK', name: 'Деблокир. ключи' },
  ];

  switchTab(tabId: string) {
    this.activeTab = tabId;
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    this.filterEquipmentByTab(stationId);
  }
}
