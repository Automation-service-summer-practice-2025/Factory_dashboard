import { Component } from '@angular/core';
import { FactoryMap } from './factory-map/factory-map';
import { StatusPanelComponent } from './status-panel/status-panel.component';

@Component({
  selector: 'app-load-window',
  imports: [FactoryMap, StatusPanelComponent],
  templateUrl: './load-window.component.html',
  styleUrl: './load-window.component.css',
})
export class LoadWindowComponent {}
