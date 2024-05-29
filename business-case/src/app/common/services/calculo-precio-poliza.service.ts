import { Injectable } from '@angular/core';
import { Poliza } from '../models/poliza.model';

@Injectable({
  providedIn: 'root'
})
export class CalculoPrecioPolizaService {

  constructor() { }

  calculatePrice(poliza: Poliza) {
    return Number(poliza.asistenciaCarretera) * 5 + Number(poliza.responsabilidadCivil) * 3 + Number(poliza.vehiculoSustitucion) * 3 + Number(poliza.colisionAnimales) * 2;
  }
}
