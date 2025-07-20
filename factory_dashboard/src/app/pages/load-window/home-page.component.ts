import { Component } from '@angular/core';
import { FactoryMap } from "../../components/factory-map/factory-map";
import { StatusPanelComponent } from '../../components/status-panel/status-panel.component';


@Component({
  selector: 'app-home-page',
  imports: [FactoryMap, StatusPanelComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
