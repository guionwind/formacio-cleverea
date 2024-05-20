import { Poliza } from '../common/models/poliza.model';

import { CommonModule } from '@angular/common';
import { Component , DoCheck, Input} from '@angular/core';

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
export class SummaryComponent implements DoCheck {
  @Input() poliza: Poliza;

  nombreApellidos: string;
  fechaNacimiento: string;
  marcaVehiculo: string;

  asistenciaCarretera: boolean = false;
  responsabilidadCivil: boolean = false;
  vehiculoSustitucion: boolean = false;
  colisionAnimales: boolean = false;


  constructor() {
    this.poliza = new Poliza()
    this.nombreApellidos = "not-init"
    this.fechaNacimiento = "not-init"
    this.marcaVehiculo = "not-init"
  }

  ngDoCheck() {
    this.nombreApellidos = this.poliza.tomador.nombreApellidos
    this.fechaNacimiento = this.poliza.tomador.fechaNacimiento
    this.marcaVehiculo = this.poliza.tomador.marcaVehiculo
  }

  calculatePrice() {
    return Number(this.poliza.asistenciaCarretera) * 5 + Number(this.poliza.responsabilidadCivil) * 3 + Number(this.poliza.vehiculoSustitucion) * 3 + Number(this.poliza.colisionAnimales) * 2;
  }

  getNombreApellidos() {
    return this.poliza.tomador.nombreApellidos
  }

  getFechaNacimiento() {
    return this.poliza.tomador.fechaNacimiento
  }
  
  getMarcaVehiculo() {
    return this.poliza.tomador.marcaVehiculo
  }
}
