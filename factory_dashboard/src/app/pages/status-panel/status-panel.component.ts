import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from '../../services/api.service'
import { StatusData } from '../../models/status.model';

@Component({
  selector: 'app-status-panel',
  imports: [CommonModule],
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.css'
})
export class StatusPanelComponent {

  ngOnInit(): void {
    // this.loadStatusInfoData();
    this.loadStatusInfoMockData()
  }

  constructor (private apiService: APIService) {}

  statusInfo!: StatusData [];

  loadStatusInfoData() {
    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.statusInfo = data;
        console.log('Загружено:', data);
      },
      error: (err) => {
        console.error('Ошибка загрузки данных:', err);
      }
    });
  }

  loadStatusInfoMockData() {
    this.statusInfo = [
      {
        title: 'Загазованность',
        notAck: 2,
        ack: 0,
        diag: 0,
        status: 'gas'
      },
      {
        title: 'Деблокировочные ключи',
        notAck: 483,
        ack: 0,
        diag: 0,
        status: 'keys'
      },
      {
        title: 'Блокировки и сигнализация',
        notAck: 19,
        ack: 0,
        diag: 0,
        status: 'block'
      }];
  }

}
