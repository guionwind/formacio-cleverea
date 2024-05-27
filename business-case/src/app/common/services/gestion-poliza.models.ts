import { Poliza } from "../models/poliza.model"
import { Tomador } from "../models/tomador.model"

export const tomadorConfig: Tomador = {
    nombreApellidos: "",
    fechaNacimiento: "",
    marcaVehiculo: ""
}

export const polizaConfig: Poliza = {
    asistenciaCarretera: false,
    responsabilidadCivil: false,
    vehiculoSustitucion: false,
    colisionAnimales: false
}