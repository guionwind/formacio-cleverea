import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';

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
  @Output() sendData = new EventEmitter<{
    nombreApellidos: string,
    fechaNacimiento: string,
    marcaVehiculo: string,

    asistenciaCarretera: boolean,
    responsabilidadCivil: boolean,
    vehiculoSustitucion: boolean,
    colisionAnimales: boolean,
  }>();

  nombreApellidos: string = "";
  fechaNacimiento: string = "";
  marcaVehiculo: string = "";

  asistenciaCarretera: boolean = false;
  responsabilidadCivil: boolean = false;
  vehiculoSustitucion: boolean = false;
  colisionAnimales: boolean = false;


  constructor() {
    
  }

  onClick() {


    this.sendData.emit({
      nombreApellidos: this.nombreApellidos,
      fechaNacimiento: this.fechaNacimiento,
      marcaVehiculo: this.marcaVehiculo,
      asistenciaCarretera: this.asistenciaCarretera,
      responsabilidadCivil: this.responsabilidadCivil,
      vehiculoSustitucion: this.vehiculoSustitucion,
      colisionAnimales: this.colisionAnimales
    })

  }

  onUpdateConfig(configData: {asistencia: boolean, responsabilidad: boolean, vehiculo: boolean, colision: boolean}) {
    this.asistenciaCarretera = configData.asistencia
    this.responsabilidadCivil = configData.responsabilidad
    this.vehiculoSustitucion = configData.vehiculo
    this.colisionAnimales = configData.colision
  } 

}
