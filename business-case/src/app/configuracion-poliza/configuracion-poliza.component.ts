import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderinputComponent } from '../common/components/sliderinput/sliderinput.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { CommonModule } from '@angular/common';
import { coberturaArray } from './configuracion-poliza.models';

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

  coberturasExistentes = coberturaArray;

  constructor(private gestionPoliza: GestionPolizaService) {
  }

  onUpdate(event: {activate:boolean, id:string}) {
    this.gestionPoliza.updateCobertura(event)
  }
}
