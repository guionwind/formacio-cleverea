import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { GestionPolizaService } from './common/services/gestion-poliza.service';
import { ConfiguracionPolizaComponent } from "./configuracion-poliza/configuracion-poliza.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        './common/styles/styles-common.css'
    ],
    imports: [
        RouterOutlet,
        RouterModule,
        DatosVehiculoComponent,
        CommonModule,
        SummaryComponent,
        ConfiguracionPolizaComponent,
    ]
})
export class AppComponent {
  title = 'business-case';

  showSummary: boolean = false

  dataReceived: boolean = false

  constructor(private gestionPoliza: GestionPolizaService) {
    
  }

}
