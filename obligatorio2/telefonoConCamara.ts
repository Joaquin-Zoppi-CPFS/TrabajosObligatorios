import { Telefono } from "./telefono";

export class TelefonoConCamara extends Telefono {

    constructor(estaPrendido:boolean, bateriaActual:number, modelo:string) {
        super(estaPrendido,bateriaActual,modelo);
    }


    public sacarFotos():void {
        if (this.getEstaPrendido() == true && this.getBateriaActual() > 0){
            console.log("*Saca una foto*");
        }else{
            console.log("El dispositivo esta apagado");
        }

    }
}