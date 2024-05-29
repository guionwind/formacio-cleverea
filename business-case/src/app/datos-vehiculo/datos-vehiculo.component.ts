import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class DatosVehiculoComponent implements OnInit {

  datosForm: FormGroup;

  submitted: boolean = false;

  constructor(private gestionPoliza:GestionPolizaService) {
  }

  ngOnInit(): void {
    this.datosForm = new FormGroup ({
      nombre: new FormControl<string>("", [Validators.required, this.validarNombreApellidos.bind(this)]),
      fecha: new FormControl<string>("", [Validators.required, Validators.minLength(10), Validators.pattern('[0-9/]*')]),
      marca: new FormControl<string>("", [Validators.required, Validators.minLength(3)])
    })
  }

  //need help with passing from classes to interfaces
  onSubmit() {
    this.submitted = true;
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

  validarNombreApellidos(control: FormControl): {[s: string]: boolean} {
    let value: string = control.value;
    if (value.indexOf(' ') === -1 || value.indexOf(' ') === value.length - 1) return {noapellido: true}
    return null;
  }
}
