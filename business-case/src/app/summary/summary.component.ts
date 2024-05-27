import { Poliza } from '../common/models/poliza.model';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { RouterOutlet } from '@angular/router';
import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';
import { Observable } from 'rxjs-compat';
import { Tomador } from '../common/models/tomador.model';

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
  //dinamic vs imperatiu
  precioFinal$: Observable<number> = this.gestionPoliza.priceTotal$;
  poliza$: Observable<Poliza> = this.gestionPoliza.poliza$;
  tomador$: Observable<Tomador> = this.gestionPoliza.tomador$;

  constructor(private gestionPoliza: GestionPolizaService) {
  }

}
