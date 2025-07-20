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
import { APIService } from '../services/api.service';
import { ELEMENTS_MOCK } from '../mocks/Elements.mock';

interface Position {
  id: number;
  number: string;
  status: string;
  lastMetroControlDate: Date;
  nextMetroControlDate: Date;
  lastCheckDate: Date;
  manufacturerData: {
    name: string;
    passportNumber: string;
    serialNumber: string;
    country: string;
    productionDate: Date;
    isImported: boolean;
    dimensions: string;
    weight: string;
  };
  fgisArshinNumber: string;
  checkInterval: string;
  measurementRangeNKPR: string;
  acts: {
    id: number;
    documentName: string;
    repairType: string;
    plannedStartDate: Date;
    actualStartDate: Date | null;
    plannedEndDate: Date;
    actualEndDate: Date | null;
  }[];
}

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
    CommonModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  providers: [DatePipe]
})

export class SideBarComponent implements OnInit{
  searchTerm: string = '';
  positions!: Position[];
  filteredPositions: Position[] = [];
  selectedPosition: Position | null = null;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    // this.loadElementsData();
    this.loadElementsMockData();
    this.filteredPositions = [...this.positions];

    // Выбираем первую позицию по умолчанию
    if (this.filteredPositions.length > 0) {
      this.selectedPosition = this.filteredPositions[0];
    }
  }

  filterPositions(): void {
    if (!this.searchTerm) {
      this.filteredPositions = [...this.positions];
    } else {
      this.filteredPositions = this.positions.filter(position =>
        position.number.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  selectPosition(position: Position): void {
    this.selectedPosition = position;
  }

  loadElementsData() {
    this.apiService.getElements().subscribe({
      next: (data) => {
        this.positions = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных:', err);
      }
    });
  }

  loadElementsMockData() {
    this.positions = [...ELEMENTS_MOCK];
  }
}
