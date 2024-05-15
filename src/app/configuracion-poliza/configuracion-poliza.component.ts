import { Component } from '@angular/core';
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
  
  asistenciaCarretera: boolean = false;
  responsabilidadCivil: boolean = false;
  vehiculoSustitucion: boolean = false;
  colisionAnimales: boolean = false;

}
