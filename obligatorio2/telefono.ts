import * as readline from "readline-sync" 

export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    private modelo: string;

    constructor(estaPrendido:boolean, bateriaActual, modelo:string) {
        this.estaPrendido= estaPrendido;
        this.bateriaActual= bateriaActual;
        this.modelo= modelo;
    }

    public mandarMensaje():void {
        if (this.estaPrendido == true && this.bateriaActual > 0) {
            let mensaje:string = readline.question("Escriba su mensaje: ");
            console.log(mensaje);
        }else{
            console.log("El telefono no esta encendido");
        }
    }

    public hacerLlamada(nro:number):void {
        if (this.estaPrendido == true && this.bateriaActual > 0){
            console.log("llamando... al numero: " + nro);
        }        
    }

    public prenderApagar():void {     
        if (this.estaPrendido == false) {
            let encender:string = readline.question("Quieres prender el dispositivo? Si/No");
            if (encender.toLowerCase() == "si") {
                this.estaPrendido = true;
                console.log("El dispositivo se encendera");
            }else{
                console.log("El disposivo no se encendera");
            }
        }

        if (this.estaPrendido == true) {
            let apagar:string = readline.question("Quieres apagar el dispositivo? Si/No");
                if (apagar.toLowerCase() == "si") {
                    this.estaPrendido = false;
                    console.log("El dispositivo se apagara");
                }else{
                    console.log("El dispositivo no se apagara");
                }
        }
    }

    public getEstaPrendido():boolean{
        return this.estaPrendido
    }
    
    public getBateriaActual():number{
        return this.bateriaActual
    }
}
