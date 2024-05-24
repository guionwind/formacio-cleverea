import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { Tomador } from '../common/models/tomador.model';


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

  constructor(private gestionPoliza:GestionPolizaService) {
  }

  //need help with passing from classes to interfaces
  onSend() {
    const tomador = new Tomador()
    tomador.nombreApellidos = this.nombre
    tomador.fechaNacimiento = this.fecha
    tomador.marcaVehiculo = this.marca
    this.gestionPoliza.setTomador(tomador)
  }

}
