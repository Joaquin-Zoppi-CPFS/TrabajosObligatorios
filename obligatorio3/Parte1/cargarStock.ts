import { Kiosko } from "./kiosko";

export class CargarStock {
    private stock:Kiosko[];

    public constructor(stock:Kiosko[]) {
        this.stock = stock;
    }

    public consultarEstado(){
        for (let i = 0; i < this.stock.length; i++) {
            if (this.stock[i].getCantidad() <= 0) {
                console.log("El producto "+ this.stock[i].getItem() +" esta agotado");
            } else {
                console.log("El producto "+ this.stock[i].getItem() +" todavia tiene Stock");
            }
        }
    }
    

}