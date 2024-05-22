import { Poliza } from '../common/models/poliza.model';

import { CommonModule } from '@angular/common';
import { Component , DoCheck, Input} from '@angular/core';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: [
    './summary.component.css',
    '../common/styles/styles-common.css'
  ]
})
export class SummaryComponent {

  precioFinal: number = this.gestionPoliza.calculatePrice();

  poliza: Poliza;

  constructor(private gestionPoliza: GestionPolizaService) {
    this.poliza = this.gestionPoliza.poliza
    this.precioFinal = gestionPoliza.precioFinal
  }
}
