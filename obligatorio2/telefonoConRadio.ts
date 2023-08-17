import { Telefono } from "./telefono";

export class TelefonoConRadio extends Telefono {
    private frecuenciaActual:number

    constructor(estaPrendido:boolean, bateriaActual:number, modelo:string, frecuenciaActual:number) {
        super(estaPrendido,bateriaActual,modelo)
        this.frecuenciaActual= frecuenciaActual
    }

    public verFrecuenciaActual():string{
        return "la frecuencia actual es " + this.frecuenciaActual 
    }
}