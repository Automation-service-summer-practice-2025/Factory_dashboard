import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-tech-dock',
  imports: [CommonModule, MatSelectModule],
  templateUrl: './tech-dock.component.html',
  styleUrl: './tech-dock.component.css'
})
export class TechDockComponent {
  documents = [
    { id: 'act', name: 'Акт СБ и ПАЗ', fileName: 'akt_sb_paz_1.pdf' },
    { id: 'document', name: 'ОРД на отключение блокировки', fileName: 'ord_otkl_block_1.pdf' },
    { id: 'plan', name: 'План мероприятий', fileName: 'plan_meropriyatiy_1.pdf' },
    { id: 'regulation', name: 'Регламент раздел 5.2', fileName: 'reglament_5_2.pdf' },
  ];

  selectedDocument: string = '';

  constructor(private http: HttpClient) {}

  onDocumentChange(documentId: string): void {
    const selectedDoc = this.documents.find(doc => doc.id === documentId);
    if (selectedDoc) {
      this.downloadFile(selectedDoc.fileName);
    }
    this.selectedDocument = '';
  }

  private downloadFile(fileName: string): void {
    const fileUrl = `assets/tech-documents/${fileName}`;
    
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(
      (blob: Blob) => {
        // Создаем временную ссылку для скачивания
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        
        // Очищаем память
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      (error) => {
        console.error('Ошибка при скачивании файла:', error);
        // Здесь можно добавить уведомление для пользователя
      }
    );
  }
}
