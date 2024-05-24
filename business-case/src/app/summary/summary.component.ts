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
  precioFinal: number = 0;
  poliza: Poliza;
  private priceObsSubscription: Subscription
  private tomadorSubscription: Subscription

  constructor(private gestionPoliza: GestionPolizaService) {
    this.poliza = this.gestionPoliza.poliza
    this.precioFinal = this.gestionPoliza.precioFinal
  }

  ngOnInit() {
    this.priceObsSubscription = this.gestionPoliza.priceSubject.subscribe(data => {this.precioFinal = data})
    this.tomadorSubscription = this.gestionPoliza.tomadorSubject.subscribe(data => {this.poliza.tomador = data})

  }


  ngOnDestroy() {
    this.priceObsSubscription.unsubscribe()
    this.tomadorSubscription.unsubscribe()
  }
}
