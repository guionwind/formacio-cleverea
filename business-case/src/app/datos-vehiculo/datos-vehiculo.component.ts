import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';


@Component({
  selector: 'app-datos-vehiculo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ConfiguracionPolizaComponent,
  ],
  templateUrl: './datos-vehiculo.component.html',
  styleUrls: [
    './datos-vehiculo.component.css',
    '../common/styles/styles-common.css'
  ]
})
export class DatosVehiculoComponent {

  nombre: string
  fecha: string
  marca: string

  //inicialitzar valors buits; si no peta gestionPoliza.updateTomador en rebre valors undefined
  constructor(private gestionPoliza:GestionPolizaService) {
  }

  onSend() {
    this.gestionPoliza.updateTomador(this.nombre, this.fecha, this.marca)
  }

}
