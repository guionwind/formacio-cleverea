import { Poliza } from './common/models/poliza.model';
import { DatosVehiculoComponent } from './datos-vehiculo/datos-vehiculo.component';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  showSummary: boolean = false
  
  poliza: Poliza

  constructor() {
    this.poliza = new Poliza()
  }

  onReceiveData(poliza: Poliza) {
    this.poliza = poliza

    if (!this.emptyData()) {
      this.showSummary = true
    }
    
  }

  emptyData() {
    const filledIn = !this.emptyString(this.poliza.tomador.nombreApellidos) && !this.emptyString(this.poliza.tomador.fechaNacimiento) && !this.emptyString(this.poliza.tomador.marcaVehiculo)
    
    const hayCoberturas = this.poliza.asistenciaCarretera || this.poliza.responsabilidadCivil || this.poliza.vehiculoSustitucion || this.poliza.colisionAnimales

    const result = filledIn && hayCoberturas
    return !result;
  }

  emptyString(str: string) {
    return (str.length === 0)
  }
}
