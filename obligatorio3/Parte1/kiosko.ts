export class Kiosko {

    private item:string;
    private cantidad:number;
    private costo:number
    private estaVendido: boolean;

    public constructor(item:string,cantidad:number,costo:number,estaVendido:boolean) {
        this.item = item;
        this.cantidad = cantidad;
        this.costo = costo;
        this.estaVendido = estaVendido;
    }

    public getCantidad(): number{
        return this.cantidad;
    }

    public getItem(): string{
        return this.item
    }
}