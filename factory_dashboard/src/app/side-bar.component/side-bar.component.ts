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
  manufacturerData: string;
  fgisArshinNumber: string;
  checkInterval: string;
  measurementRange: string;
  acts: { id: number; date: Date }[];
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
    // Заглушка данных - в реальном приложении будет запрос к API
    this.positions = [
      {
        id: 1,
        number: 'PT-1001',
        status: 'Включен деблок',
        lastMetroControlDate: new Date('2023-01-15'),
        nextMetroControlDate: new Date('2024-01-15'),
        lastCheckDate: new Date('2023-01-10'),
        manufacturerData: 'ООО "Даджет", Россия',
        fgisArshinNumber: 'RU.C.34.123.A №12345',
        checkInterval: '1 год',
        measurementRange: '0-100°C',
        acts: [
          { id: 1, date: new Date('2023-01-10') },
          { id: 2, date: new Date('2022-01-12') }
        ]
      },
      // Добавьте больше позиций по необходимости
    ];
  }
}
