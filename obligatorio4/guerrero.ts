import { Personaje } from "./personaje";

export class Guerrero extends Personaje {

    private armaduraPesada:number;
    private extraDamage:number;
    private vidaExtra:number;


    public constructor(nombre:string,vida:number,damage:number,energia:number) {
        super(nombre,vida,damage,energia)
    }
    
    public caracteristicasGuerrero(){
        this.armaduraPesada = 30;
        this.extraDamage = 10;
        this.vidaExtra = 5;
        super.aumentarVida(this.armaduraPesada);
        super.aumentarDamage(this.extraDamage);
        super.aumentarVida(this.vidaExtra);
    }

}