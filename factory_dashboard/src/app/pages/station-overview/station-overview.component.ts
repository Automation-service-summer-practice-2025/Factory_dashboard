import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StationModel, StationEquipment } from '../../models/factory.model';
import { STATIONS_DATA_MOCK } from '../../mocks/StationsData.mock';
import { STATION_EQUIPMENT_DATA_MOCK } from '../../mocks/EquipmentData.mock';

@Component({
  selector: 'app-station-overview',
  imports: [CommonModule],
  templateUrl: './station-overview.component.html',
  styleUrls: ['./station-overview.component.css'],
})
export class StationOverviewComponent implements OnInit {
  station: StationModel | null = null;
  stationEquipment: StationEquipment[] = [];
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

    this.stationEquipment = STATION_EQUIPMENT_DATA_MOCK.filter(
      (equipment) => equipment.station_id === stationId,
    );
  }

  get totalPages(): number {
    return Math.ceil(this.stationEquipment.length / this.itemsPerPage);
  }

  get paginatedItems(): any[] {
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

  goToElementDetails(elementId: number): void {
    this.router.navigate([`/station/${this.station?.id}/${elementId}`]);
  }
}
