import { Poliza } from '../common/models/poliza.model';
import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-datos-vehiculo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ConfiguracionPolizaComponent,
  ],
  templateUrl: './datos-vehiculo.component.html',
  styleUrl: './datos-vehiculo.component.css'
})
export class DatosVehiculoComponent {
  @Output() sendData = new EventEmitter<Poliza>();

  nombre: string
  fecha: string
  marca: string
  poliza: Poliza

  constructor() {
    this.nombre = ""
    this.fecha = ""
    this.marca = ""
    this.poliza = new Poliza()
  }

  onSend() {
    this.poliza.tomador.nombreApellidos = this.nombre
    this.poliza.tomador.fechaNacimiento = this.fecha
    this.poliza.tomador.marcaVehiculo = this.marca

    this.sendData.emit(this.poliza)
  }

  onAsistencia(bool: boolean) {
    this.poliza.asistenciaCarretera = bool
  }

  onResponsabilidad(bool: boolean) {
    this.poliza.responsabilidadCivil = bool
  }

  onVehiculo(bool: boolean) {
    this.poliza.vehiculoSustitucion = bool
  }

  onColision(bool: boolean) {
    this.poliza.colisionAnimales = bool
  }

}
