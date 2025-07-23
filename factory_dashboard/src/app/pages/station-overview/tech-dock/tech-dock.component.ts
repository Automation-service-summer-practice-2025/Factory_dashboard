import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TechnicalDocuments } from '../../../models/technicalDocuments.model';
import { TECHNICAL_DOCUMENTS_MOCK } from '../../../mocks/TechnicalDocuments.mock';

@Component({
  standalone: true,
  selector: 'app-tech-dock',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './tech-dock.component.html',
  styleUrl: './tech-dock.component.css',
})
export class TechDockComponent implements OnInit{
  technicalDocuments: TechnicalDocuments[] = [];

  selectedDocument: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTechnicalDocumentMockData();
  }

  onDocumentChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const documentId = Number(selectElement.value);

    if (documentId) {
      const selectedDoc = this.technicalDocuments.find((doc) => doc.id === documentId);
      if (selectedDoc) {
        this.downloadFile(selectedDoc.fileName);
      }
      this.selectedDocument = '';
      selectElement.value = '';
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
  }
}
