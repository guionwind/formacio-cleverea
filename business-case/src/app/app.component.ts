import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatosVehiculoComponent,
    CommonModule,
    SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'business-case';

  showSummary: boolean = false;

  nombreApellidos: string = "";
  fechaNacimiento: string = "";
  marcaVehiculo: string = "";

  asistenciaCarretera: boolean = false;
  responsabilidadCivil: boolean = false;
  vehiculoSustitucion: boolean = false;
  colisionAnimales: boolean = false;
  

  constructor() {
  }

  onReceiveData(poliza: {
    nombreApellidos: string,
    fechaNacimiento: string,
    marcaVehiculo: string,

    asistenciaCarretera: boolean,
    responsabilidadCivil: boolean,
    vehiculoSustitucion: boolean,
    colisionAnimales: boolean,
  }) {

    this.nombreApellidos = poliza.nombreApellidos;
    this.fechaNacimiento = poliza.fechaNacimiento;
    this.marcaVehiculo = poliza.marcaVehiculo;
    this.asistenciaCarretera = poliza.asistenciaCarretera;
    this.responsabilidadCivil = poliza.responsabilidadCivil;
    this.vehiculoSustitucion = poliza.vehiculoSustitucion;
    this.colisionAnimales = poliza.colisionAnimales;

    this.showSummary = true;
  }


}
