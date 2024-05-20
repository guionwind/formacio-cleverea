import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  @Input() nombreApellidos: string = "no_inicializado";
  @Input() fechaNacimiento: string = "no_inicializado";
  @Input() marcaVehiculo: string = "no_inicializado";

  @Input() asistenciaCarretera: boolean = false;
  @Input() responsabilidadCivil: boolean = false;
  @Input() vehiculoSustitucion: boolean = false;
  @Input() colisionAnimales: boolean = false;

  calculatePrice() {

    return Number(this.asistenciaCarretera) * 5 + Number(this.responsabilidadCivil) * 3 + Number(this.vehiculoSustitucion) * 3 + Number(this.colisionAnimales) * 2;
  }
}
