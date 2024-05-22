import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderinputComponent } from '../common/components/sliderinput/sliderinput.component';

@Component({
  selector: 'app-configuracion-poliza',
  standalone: true,
  imports: [
    FormsModule,
    SliderinputComponent
  ],
  templateUrl: './configuracion-poliza.component.html',
  styleUrl: './configuracion-poliza.component.css'
})

export class ConfiguracionPolizaComponent {

  @Output() sendAsistencia = new EventEmitter<boolean>();
  @Output() sendResponsabilidad = new EventEmitter<boolean>();
  @Output() sendVehiculo = new EventEmitter<boolean>();
  @Output() sendColision = new EventEmitter<boolean>();


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

  onAsistencia(bool: boolean) {
    this.sendAsistencia.emit(bool)
  }

  onResponsabilidad(bool: boolean) {
    this.sendResponsabilidad.emit(bool)
  }

  onVehiculo(bool: boolean) {
    this.sendVehiculo.emit(bool)
  }

  onColision(bool: boolean) {
    this.sendColision.emit(bool)
  }
}
