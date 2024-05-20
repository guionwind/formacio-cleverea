import { Tomador } from "./tomador.model";

export class Poliza {
    constructor(
        public tomador: Tomador = new Tomador,
        public asistenciaCarretera: boolean = false,
        public responsabilidadCivil: boolean = false,
        public vehiculoSustitucion: boolean = false,
        public colisionAnimales: boolean = false,
    ) {}
}