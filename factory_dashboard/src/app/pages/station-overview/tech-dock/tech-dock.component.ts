import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TechnicalDocuments } from '../../../models/documents.model';
import { TECHNICAL_DOCUMENTS_MOCK } from '../../../mocks/TechnicalDocuments.mock';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-tech-dock',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './tech-dock.component.html',
  styleUrl: './tech-dock.component.css',
})
export class TechDockComponent implements OnInit {
  technicalDocuments: TechnicalDocuments[] = [];
  @Input() activeTab: string = 'SBPS';
  filteredDocuments: TechnicalDocuments[] = [];
  selectedDocument: string = '';
  showDropdown: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTechnicalDocumentMockData();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  onDocumentSelect(documentId: number): void {
    if (documentId) {
      const selectedDoc = this.technicalDocuments.find(
        (doc) => doc.id === documentId,
      );
      if (selectedDoc) {
        this.downloadFile(selectedDoc.fileName);
      }
      this.selectedDocument = '';
      this.showDropdown = false;
    }
  }

  private downloadFile(fileName: string): void {
    const fileUrl = `assets/tech-documents/${fileName}`;

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const createdElement = document.createElement('a');

        createdElement.href = url;
        createdElement.download = fileName;
        document.body.appendChild(createdElement);
        createdElement.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(createdElement);
      },
      error: (error) => {
        console.error('Ошибка при скачивании файла:', error);
      },
    });
  }

  loadTechnicalDocumentMockData() {
    this.technicalDocuments = [...TECHNICAL_DOCUMENTS_MOCK];
    this.filterDocuments();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeTab']) {
      this.filterDocuments();
    }
  }

  private filterDocuments(): void {
    if (this.activeTab === 'UnK') {
      this.filteredDocuments = [];
    } else {
      this.filteredDocuments = this.technicalDocuments.filter(
        (doc) => doc.tabType === this.activeTab,
      );
    }
  }
}
