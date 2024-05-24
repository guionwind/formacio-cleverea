import { CalculoPrecioPolizaService } from './calculo-precio-poliza.service';
import { Injectable } from '@angular/core';
import { Poliza } from '../models/poliza.model';
import { Cobertura } from '../enums/cobertura.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tomador } from '../models/tomador.model';


@Injectable({
  providedIn: 'root'
})
export class GestionPolizaService {

  // final price
  private priceTotalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public priceTotal$: Observable<number> = this.priceTotalSubject.asObservable()

  private polizaSubject: BehaviorSubject<Poliza> = new BehaviorSubject<Poliza>(new Poliza())
  public poliza$: Observable<Poliza> = this.polizaSubject.asObservable()

  private tomadorSubject: BehaviorSubject<Tomador> = new BehaviorSubject<Tomador>(new Tomador)
  public tomador$: Observable<Tomador> = this.tomadorSubject.asObservable()


  constructor(private calculadora: CalculoPrecioPolizaService) {
  }

  //la implementacio crea una copia de la poliza actual, la actualitza i despres fa setPoliza
  //manera de nomes actualitzar un atribut per no haver de copiar?
  updateCobertura(event: {activate:boolean, id:string}) {
    const poliza = this.polizaSubject.getValue()
    switch(event.id){
      case Cobertura.AsistenciaCarretera:
        poliza.asistenciaCarretera = event.activate;
        break;
      case Cobertura.ResponsabilidadCivil:
        poliza.responsabilidadCivil = event.activate;
        break;
      case Cobertura.VehiculoSustitucion:
        poliza.vehiculoSustitucion = event.activate;
        break;
      case Cobertura.ColisionAnimales:
        poliza.colisionAnimales = event.activate;
        break;
      default:
        console.log("Not covered enum type! Check poliza.model or cobertura.enum")
    }
    this.setPoliza(poliza)
    this.updatePrice()
  }

  calculatePrice() {
    return this.calculadora.calculatePrice(this.polizaSubject.getValue())
  }

  updatePrice() {
    this.priceTotalSubject.next(this.calculatePrice())
  }

  getPriceTotal() {
    return this.priceTotal$
  }

  getPoliza() {
    return this.poliza$
  }

  setPoliza(poliza: Poliza) {
    this.polizaSubject.next(poliza)
  }

  getTomador() {
    return this.tomador$
  }

  setTomador(tomador: Tomador) {
    this.tomadorSubject.next(tomador)
  }

  

  /* emptyData() {
    const filledIn = !this.emptyString(this.poliza.tomador.nombreApellidos) && !this.emptyString(this.poliza.tomador.fechaNacimiento) && !this.emptyString(this.poliza.tomador.marcaVehiculo)
    
    const hayCoberturas = this.poliza.asistenciaCarretera || this.poliza.responsabilidadCivil || this.poliza.vehiculoSustitucion || this.poliza.colisionAnimales

    const result = filledIn && hayCoberturas
    return !result;
  }

  emptyString(str: string) {
    return (str.length === 0)
  } */

  

}
