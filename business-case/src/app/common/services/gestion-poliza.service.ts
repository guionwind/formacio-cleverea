import { Injectable } from '@angular/core';
import { Poliza } from '../models/poliza.model';
import { Cobertura } from '../enums/cobertura.enum';
import { Subject } from 'rxjs';
import { Tomador } from '../models/tomador.model';


@Injectable({
  providedIn: 'root'
})
export class GestionPolizaService {

  poliza: Poliza = new Poliza();

  precioFinal: number = 0;

  priceSubject: Subject<number> = new Subject()

  tomadorSubject: Subject<Tomador> = new Subject()

  constructor() {
  }

  updateCobertura(event: {activate:boolean, id:string}) {
    switch(event.id){
      case Cobertura.AsistenciaCarretera:
        this.poliza.asistenciaCarretera = event.activate;
        break;
      case Cobertura.ResponsabilidadCivil:
        this.poliza.responsabilidadCivil = event.activate;
        break;
      case Cobertura.VehiculoSustitucion:
        this.poliza.vehiculoSustitucion = event.activate;
        break;
      case Cobertura.ColisionAnimales:
        this.poliza.colisionAnimales = event.activate;
        break;
      default:
        console.log("Not covered enum type! Check poliza.model or cobertura.enum")
    }
  }

  calculatePrice() {
    return this.precioFinal = Number(this.poliza.asistenciaCarretera) * 5 + Number(this.poliza.responsabilidadCivil) * 3 + Number(this.poliza.vehiculoSustitucion) * 3 + Number(this.poliza.colisionAnimales) * 2;
  }

  //use ifs to to prevent assigning null/undefined values
  updateTomador(nombre:string, fecha:string, marca:string) {
    if (nombre) this.poliza.tomador.nombreApellidos = nombre;
    if (fecha) this.poliza.tomador.fechaNacimiento = fecha;
    if (marca) this.poliza.tomador.marcaVehiculo = marca;
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

  setTomador(tomador: Tomador) {
    this.tomadorSubject.next(tomador)
  }

  getTomador(): Subject<Tomador> {
    return this.tomadorSubject
  }

}
