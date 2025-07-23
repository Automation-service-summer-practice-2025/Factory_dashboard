import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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

  elements!: StationEquipment[];
  filteredElements: StationEquipment[] = [];
  selectedElements: StationEquipment | null = null;

  ngOnInit(): void {
    this.loadElementsMockData();

    this.filteredElements = [...this.elements];

    if (this.filteredElements.length > 0) {
      this.selectedElements = this.filteredElements[0];
    }
  }

  filterPositions(): void {
    if (!this.searchTerm) {
      this.filteredElements = [...this.elements];
    } else {
      this.filteredElements = this.elements.filter((element) =>
        element.element_name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()),
      );
    }
  }

  selectElements(element: StationEquipment): void {
    this.selectedElements = element;
  }

  loadElementsMockData() {
    this.elements = [...STATION_EQUIPMENT_DATA_MOCK];
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
