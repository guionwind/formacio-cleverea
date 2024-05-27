import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ConfiguracionPolizaComponent } from '../configuracion-poliza/configuracion-poliza.component';
import { GestionPolizaService } from '../common/services/gestion-poliza.service';
import { Tomador } from '../common/models/tomador.model';


@Component({
  selector: 'app-datos-vehiculo',
  standalone: true,
  imports: [
    CommonModule,
    ConfiguracionPolizaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './datos-vehiculo.component.html',
  styleUrls: [
    './datos-vehiculo.component.css',
    '../common/styles/styles-common.css'
  ]
})
export class DatosVehiculoComponent {

  datosForm: FormGroup;

  constructor(private gestionPoliza:GestionPolizaService) {
  }

  ngOnInit(): void {
    this.datosForm = new FormGroup ({
      nombre: new FormControl<string>("", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      fecha: new FormControl<string>("", [Validators.required, Validators.minLength(10)]),
      marca: new FormControl<string>("", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')])
    })
  }

  //need help with passing from classes to interfaces
  onSubmit() {
    if (this.datosForm.valid) {
      const tomador: Tomador = {
        nombreApellidos: this.datosForm.get('nombre').value,
        fechaNacimiento: this.datosForm.get('fecha').value,
        marcaVehiculo: this.datosForm.get('marca').value
      }
      this.gestionPoliza.setTomador(tomador)
      console.log(this.datosForm)
    }
    else console.log("invalid form submission")
  }

}
