import { Poliza } from '../common/models/poliza.model';

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { RouterOutlet } from '@angular/router';
import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';
import { Subscription } from 'rxjs';

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
export class SummaryComponent implements OnInit, OnDestroy{
  precioFinal: number;
  poliza: Poliza;
  private priceObsSubscription: Subscription

  constructor(private gestionPoliza: GestionPolizaService) {
    this.poliza = this.gestionPoliza.poliza
    this.precioFinal = this.gestionPoliza.precioFinal
  }

  ngOnInit() {
    this.priceObsSubscription = this.gestionPoliza.priceObservable.subscribe(data => {this.precioFinal = data})
  }

  ngOnDestroy() {
    this.priceObsSubscription.unsubscribe()
  }
}
