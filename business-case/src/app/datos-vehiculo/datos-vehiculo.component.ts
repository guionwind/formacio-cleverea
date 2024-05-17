import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  submitted: boolean = false;

  tipoVehiculo: string = "";
  numeroBastidor: string = "";
  marca: string = "";
  modelo: string = "";
  precioCompra: string = "";
  fechaCompra: string = "";

  asistenciaCarretera: boolean = false;
  responsabilidadCivil: boolean = false;
  vehiculoSustitucion: boolean = false;
  colisionAnimales: boolean = false;

  constructor() {
    this.submitted = false;
  }

  onClick(event: any) {
    console.log(event)
    this.submitted = true;
  }
  onUpdateConfig(configData: {asistencia: boolean, responsabilidad: boolean, vehiculo: boolean, colision: boolean}) {
    this.asistenciaCarretera = configData.asistencia
    this.responsabilidadCivil = configData.responsabilidad
    this.vehiculoSustitucion = configData.vehiculo
    this.colisionAnimales = configData.colision
  } 

}
