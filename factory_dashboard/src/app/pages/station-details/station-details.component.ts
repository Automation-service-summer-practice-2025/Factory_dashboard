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
import { STATION_EQUIPMENTS_DATA_MOCK } from '../../mocks/StationEquipmentsData.mock';
import { StationEquipmentModel } from '../../models/factory.model';
import { EquipmentActModel } from '../../models/act.model';
import { EQUIPMENT_ACTS_DATA_MOCK } from '../../mocks/EquipmentActsData.mock';

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

  stationEquipment!: StationEquipmentModel[];
  filteredElements: StationEquipmentModel[] = [];
  selectedEquipment: StationEquipmentModel | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stationId = Number(this.route.snapshot.paramMap.get('station_id'));
    const activeTab = String(this.route.snapshot.paramMap.get('tab_id'));
    const equipmentId = Number(
      this.route.snapshot.paramMap.get('equipment_id'),
    );

    this.loadElementsMockData(stationId, activeTab);

    this.filteredElements = [...this.stationEquipment];
    this.selectedEquipment =
      this.stationEquipment.find(
        (equipment) => equipment.element_id === equipmentId,
      ) || null;
  }

  loadElementsMockData(stationId: number, activeTab: string): void {
    this.stationEquipment = STATION_EQUIPMENTS_DATA_MOCK.filter(
      (equipment) => equipment.station_id === stationId && equipment.tab_id === activeTab
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

  selectEquipment(equipment: StationEquipmentModel): void {
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

  getSelectedElementActs(): EquipmentActModel[] {
    if (this.selectedEquipment) {
      return EQUIPMENT_ACTS_DATA_MOCK.filter(
        (act) => act.equipmentId === this.selectedEquipment?.element_id,
      );
    }
    return [];
  }
}
