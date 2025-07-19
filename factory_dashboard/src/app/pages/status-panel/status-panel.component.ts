import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-panel',
  imports: [CommonModule],
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.css'
})
export class StatusPanelComponent {
  @Input() title!: string;
  @Input() notAck!: number;
  @Input() ack!: number;
  @Input() diag!: number;
  @Input() status!: string;

}
