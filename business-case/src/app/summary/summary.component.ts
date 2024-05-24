import { Poliza } from '../common/models/poliza.model';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { RouterOutlet } from '@angular/router';
import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ConfiguracionPolizaComponent
  ],
  templateUrl: './summary.component.html',
  styleUrls: [
    './summary.component.css',
    '../common/styles/styles-common.css'
  ]
})
export class SummaryComponent {
  precioFinal: number;
  poliza: Poliza;

  constructor(private gestionPoliza: GestionPolizaService) {
    this.poliza = this.gestionPoliza.poliza
    this.precioFinal = gestionPoliza.precioFinal
  }
}
