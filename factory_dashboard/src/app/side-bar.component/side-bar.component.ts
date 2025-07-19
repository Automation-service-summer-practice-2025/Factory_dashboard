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
  positions: Position[] = [];
  filteredPositions: Position[] = [];
  selectedPosition: Position | null = null;

  ngOnInit(): void {
    // TODO: Заменить на реальные данные из сервиса
    this.mockData();
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

  private mockData(): void {
    this.positions = [
      {
        id: 1,
        number: 'QAH190',
        status: 'Включен деблок',
        lastMetroControlDate: new Date('2023-01-15'),
        nextMetroControlDate: new Date('2024-01-15'),
        lastCheckDate: new Date('2023-01-10'),
        manufacturerData: {
          name: 'АО Электронстандарт-прибор',
          passportNumber: '7000132518',
          serialNumber: '87133',
          country: 'Россия',
          productionDate: new Date('2019-01-15'),
          isImported: false,
          dimensions: '150x200x50',
          weight: '0,000'
        },
        fgisArshinNumber: 'C-MA/17-01-2024/309465724',
        checkInterval: '2 год',
        measurementRangeNKPR: '0-50 %НКПР C6H14',
        acts: [
          {
            id: 1,
            documentName: 'Акт о выполнении этапа работ ЦМНАВ25-000376 от 22.01.2025 09:48:48',
            repairType: 'ТО-4',
            plannedStartDate: new Date('2025-01-24T08:00:00'),
            actualStartDate: new Date('2025-01-21T07:51:56'),
            plannedEndDate: new Date('2025-01-24T17:00:00'),
            actualEndDate: new Date('2025-01-21T08:28:43')
          },
          {
            id: 2,
            documentName: 'Акт о выполнении этапа работ ЦМНАВ24-004246 от 29.07.2025 19:19:23',
            repairType: 'ТО-4',
            plannedStartDate: new Date('2025-07-26T08:00:00'),
            actualStartDate: new Date('2025-07-25T12:04:53'),
            plannedEndDate: new Date('2025-07-26T09:00:00'),
            actualEndDate: new Date('2025-07-25T12:41:20')
          },
          {
            id: 3,
            documentName: 'Акт о выполнении этапа работ ЦМНАВ25-000376 от 26.07.2024 09:15:41',
            repairType: 'ТО-3',
            plannedStartDate: new Date('2024-04-26T08:00:00'),
            actualStartDate: new Date('2024-04-12T00:00:00'),
            plannedEndDate: new Date('2024-04-26T09:00:00'),
            actualEndDate: new Date('2024-04-24T09:00:00')
          },
          {
            id: 4,
            documentName: 'Акт о выполнении этапа работ ЦМНАВ25-000376 от 21.07.2024 08:28:22',
            repairType: 'ТО-4',
            plannedStartDate: new Date('2024-01-26T08:00:00'),
            actualStartDate: new Date('2024-01-19T00:00:00'),
            plannedEndDate: new Date('2024-01-26T09:00:00'),
            actualEndDate: new Date('2024-01-26T09:00:00')
          },
          {
            id: 5,
            documentName: 'Ввод начальных данных МН-00000205 от 30.11.2022 13:59:29',
            repairType: 'ДТ',
            plannedStartDate: new Date('2024-01-17T00:00:00'),
            actualStartDate: null,
            plannedEndDate: new Date('2024-01-17T00:00:00'),
            actualEndDate: null
          },
        ]
      },
    ];
  }
}
