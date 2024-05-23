import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderinputComponent } from '../common/components/sliderinput/sliderinput.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { Cobertura } from '../common/enums/cobertura.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracion-poliza',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SliderinputComponent
  ],
  templateUrl: './configuracion-poliza.component.html',
  styleUrl: './configuracion-poliza.component.css'
})

export class ConfiguracionPolizaComponent {

  coberturas: Cobertura = Cobertura.AsistenciaCarretera;
  keyValueArray = Object.values(Cobertura);

  constructor(private gestionPoliza: GestionPolizaService) {
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

  onUpdate(bool: boolean, cobertura: Cobertura) {
    this.gestionPoliza.updateCobertura(bool, cobertura)
  }
}