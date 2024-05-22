import { Injectable } from '@angular/core';
import { Poliza } from '../models/poliza.model';

@Injectable({
  providedIn: 'root'
})
export class GestionPolizaService {

  poliza: Poliza = new Poliza();

  precioFinal: number = 0;

  constructor() { }

  updateAsistencia(bool: boolean) {
    this.poliza.asistenciaCarretera = bool;
    this.precioFinal = this.calculatePrice();
    }

  updateResponsabilidad(bool: boolean) {
    this.poliza.responsabilidadCivil = bool;
    this.precioFinal = this.calculatePrice();
    }
  
  updateVehiculo(bool: boolean) {
    this.poliza.vehiculoSustitucion = bool;
    this.precioFinal = this.calculatePrice();
    }
  
  updateColision(bool: boolean) {
    this.poliza.colisionAnimales = bool;
    this.precioFinal = this.calculatePrice();
  }

  calculatePrice() {
    return this.precioFinal = Number(this.poliza.asistenciaCarretera) * 5 + Number(this.poliza.responsabilidadCivil) * 3 + Number(this.poliza.vehiculoSustitucion) * 3 + Number(this.poliza.colisionAnimales) * 2;
  }

  updateTomador(nombre:string, fecha:string, marca:string) {
    this.poliza.tomador.nombreApellidos = nombre;
    this.poliza.tomador.fechaNacimiento = fecha;
    this.poliza.tomador.marcaVehiculo = marca;
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
