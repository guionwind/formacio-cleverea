import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderinputComponent } from '../common/components/sliderinput/sliderinput.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';

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

  asistencia: boolean;
  responsabilidad: boolean;
  vehiculo: boolean;
  colision: boolean;

  constructor(private gestionPoliza: GestionPolizaService) {
    this.asistencia = false;
    this.responsabilidad = false;
    this.vehiculo = false;
    this.colision = false;
  }

  onAsistencia(bool: boolean) {
    this.gestionPoliza.updateAsistencia(bool)
  }

  onResponsabilidad(bool: boolean) {
    this.gestionPoliza.updateResponsabilidad(bool)
  }

  onVehiculo(bool: boolean) {
    this.gestionPoliza.updateVehiculo(bool)
  }

  onColision(bool: boolean) {
    this.gestionPoliza.updateColision(bool)
  }
}
