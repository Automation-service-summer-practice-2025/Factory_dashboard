import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { STATION_EQUIPMENT_DATA_MOCK } from '../../mocks/EquipmentData.mock';
import { StationEquipment } from '../../models/factory.model';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    DatePipe,
    CommonModule,
  ],
  templateUrl: './station-details.component.html',
  styleUrl: './station-details.component.css',
  providers: [DatePipe],
})
export class StationDetailsComponent implements OnInit {
  searchTerm: string = '';

  stationEquipment!: StationEquipment[];
  filteredElements: StationEquipment[] = [];
  selectedEquipment: StationEquipment | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    const equipmentId = Number(
      this.route.snapshot.paramMap.get('equipment_id'),
    );

    this.loadElementsMockData(stationId);

    this.filteredElements = [...this.stationEquipment];
    this.selectedEquipment =
      this.stationEquipment.find(
        (equipment) => equipment.element_id === equipmentId,
      ) || null;
  }

  loadElementsMockData(stationId: number): void {
    this.stationEquipment = STATION_EQUIPMENT_DATA_MOCK.filter(
      (equipment) => equipment.station_id === stationId,
    );
  }

  filterPositions(): void {
    if (!this.searchTerm) {
      this.filteredElements = [...this.stationEquipment];
    } else {
      this.filteredElements = this.stationEquipment.filter((stationEquipment) =>
        stationEquipment.element_name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()),
      );
    }
  }

  selectEquipment(equipment: StationEquipment): void {
    this.selectedEquipment = equipment;
  }

  getNextControlDate(
    controlDate: Date | undefined,
    intervalYears: number | undefined,
  ): Date | undefined {
    if (controlDate && intervalYears) {
      const result = new Date(controlDate);
      result.setFullYear(result.getFullYear() + intervalYears);
      return result;
    } else {
      return undefined;
    }
  }
}
