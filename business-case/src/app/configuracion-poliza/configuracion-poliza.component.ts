import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion-poliza',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './configuracion-poliza.component.html',
  styleUrl: './configuracion-poliza.component.css'
})

export class ConfiguracionPolizaComponent {
  @Output() sendUpdate = new EventEmitter<{
    asistencia: boolean,
    responsabilidad: boolean,
    vehiculo: boolean,
    colision: boolean
  }>();

  asistencia: boolean;
  responsabilidad: boolean;
  vehiculo: boolean;
  colision: boolean;

  constructor() {
    this.asistencia = false;
    this.responsabilidad = false;
    this.vehiculo = false;
    this.colision = false;
  }

  onSwitch() {
    this.sendUpdate.emit({
      asistencia: this.asistencia,
      responsabilidad: this.responsabilidad,
      vehiculo: this.vehiculo,
      colision: this.colision
    });
  }

}
