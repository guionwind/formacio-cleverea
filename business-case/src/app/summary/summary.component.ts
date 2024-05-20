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

  @Input() nombreApellidos: string = "jacinto";
  @Input() fechaNacimiento: string = "10101";
  @Input() marcaVehiculo: string = "toyota";

  @Input() asistenciaCarretera: boolean = false;
  @Input() responsabilidadCivil: boolean = false;
  @Input() vehiculoSustitucion: boolean = false;
  @Input() colisionAnimales: boolean = false;

  
}
