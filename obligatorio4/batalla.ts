import { Guerrero } from "./guerrero";
import { Mago } from "./mago";
import { Personaje } from "./personaje";


export class Batalla {

    private peleador1:Mago;
    private peleador2:Guerrero;


    public constructor(peleador1:Mago,peleador2:Guerrero) {
        this.peleador1 = peleador1;
        this.peleador2 = peleador2;
    }

    pelear(){
        while (!(this.peleador1.getEnergia() <= 0 || this.peleador1.getVida() <= 0 ||  this.peleador2.getVida() <= 0 || this.peleador2.getEnergia() <= 0)) {
            let movimientoAleatorioPeleador1:number = Math.floor(Math.random()* 2);
            let movimientoAleatorioPeleador2:number = Math.floor(Math.random()* 2);
            if (movimientoAleatorioPeleador1 == 1) {
                this.peleador1.atacar(this.peleador2);
            }else{
                this.peleador1.curarMago();
            }
            if (movimientoAleatorioPeleador2 == 1) {
                this.peleador2.atacar(this.peleador1);
            }else{
                this.peleador2.curar();
            }
        }
    }
}