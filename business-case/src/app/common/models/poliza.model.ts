import { Tomador } from "./tomador.model";

export class Poliza {
    tomador: Tomador = new Tomador()
    asistenciaCarretera: boolean = false
    responsabilidadCivil: boolean = false
    vehiculoSustitucion: boolean = false
    colisionAnimales: boolean = false
}