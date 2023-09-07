export class Personaje {

    private nombre:string;
    private vida:number;
    private damage:number;
    private energia:number;

    public constructor(nombre:string,vida:number,damage:number,energia:number) {
        this.nombre= nombre;
        this.vida= vida;
        this.damage= damage;
        this.energia= energia;
    }

    public atacar(objetivo:Personaje):void{
        if (this.vida > 0 && this.energia > 0) {
            objetivo.setVida(objetivo.getVida() - this.damage);
            console.log(this.nombre + " hiciste " + this.damage + " de daño");
            console.log(objetivo.getNombre() + " tu vida restante: " + Math.floor(objetivo.getVida()));
            this.energia -= 1;
        }
    }

    public curar():void{
        if (this.vida > 0 && this.energia > 0){
            let cantidadCurada:number = 5;
            console.log(this.nombre + "te curaste " + cantidadCurada + " de vida");
            this.vida += cantidadCurada;
            this.energia -= 1;
        }
        
    }

    public getVida():number{
        return this.vida;
    }

    setVida(nuevaVida:number):void{
        this.vida = nuevaVida
    }

    aumentarVida(valor:number):void{
        this.vida += valor;
    }

    getDamage():number{
        return this.damage;
    }

    aumentarDamage(valor:number):void{
        this.damage += valor;
    }
    getEnergia():number{
        return this.energia;
    }

    setEnergia(valor:number):void{
        this.energia += valor;
    }

    getNombre(){
        return this.nombre;
    }
}
