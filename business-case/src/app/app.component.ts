import { Poliza } from './common/models/poliza.model';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { GestionPolizaService } from './common/services/gestion-poliza.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatosVehiculoComponent,
    CommonModule,
    SummaryComponent,],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './common/styles/styles-common.css'
  ]
})
export class AppComponent {
  title = 'business-case';

  showSummary: boolean = false

  dataReceived: boolean = false

  constructor(private gestionPoliza: GestionPolizaService) {
    
  }

  onReceiveData(poliza: Poliza) {
    this.dataReceived = true

    if (!this.gestionPoliza.emptyData()) {
      this.showSummary = true
    }
  }

  

  
}
