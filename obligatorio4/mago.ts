import { Personaje } from "./personaje";

export class Mago extends Personaje{

    private armaduraLigera:number;
    private curacionExtra:number;
    private energiaExtra:number;

    public constructor(nombre:string,vida:number,damage:number,energia:number) {
        super(nombre,vida,damage,energia)
    }

    public caracteristicasMago(){
        this.armaduraLigera = 20;
        this.energiaExtra = 10;
        super.aumentarVida(this.armaduraLigera);
        super.setEnergia(this.energiaExtra);
    }

    public curarMago():void{
        super.curar();
        this.curacionExtra = 10;
        super.aumentarVida(this.curacionExtra);
        console.log(super.getNombre() + " Te curaste " + this.curacionExtra + " de vida extra" );
    }
    

}