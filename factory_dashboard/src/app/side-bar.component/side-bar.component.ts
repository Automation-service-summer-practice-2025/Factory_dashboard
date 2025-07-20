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
import { API_ELEMENTS_MOCK, Kir_ELEMENTS_MOCK } from '../mocks/Elements.mock';
import { Position } from '../models/elements.model';
import { Elements } from '../models/elements.model';

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

  elements!: Elements[];
  filteredElements: Elements[] = [];
  selectedElements: Elements | null = null;

  constructor(private apiService: APIService) {}

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
      this.filteredElements = this.elements.filter(element =>
        element.element_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  selectElements(element: Elements): void {
    this.selectedElements = element;
  }

  loadElementsData() {
    this.apiService.getElements().subscribe({
      next: (data) => {
        this.elements = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных:', err);
      }
    });
  }

  loadElementsMockData() {
    this.elements = [...API_ELEMENTS_MOCK];

  }

  getNextControlDate(controlDate: Date | undefined, intervalYears: number | undefined): Date | undefined {
    if (controlDate && intervalYears) {
      const result = new Date(controlDate);
      result.setFullYear(result.getFullYear() + intervalYears);
      return result;
    } else {
      return undefined;
    }
  }
}
