export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechainicio: string;
    fechafin: string;

    constructor(nombreE: string, descripcionE: string, fechainicio: string, fechafin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
    }
}
