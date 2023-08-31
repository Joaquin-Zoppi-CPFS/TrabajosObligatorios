import { Kiosko } from "./kiosko";
import { CargarStock } from "./cargarStock";

let item1:Kiosko = new Kiosko("Paquete de masitas",15,200, false);
let item2:Kiosko = new Kiosko("Botella de agua",0,300, true);
let item3:Kiosko = new Kiosko("Lata de speed",0,430, true);
let item4:Kiosko = new Kiosko("Paquete de gomitas",10,50, false);
let item5:Kiosko = new Kiosko("Paquete de papas fritas",30,500, false);


let productos: Kiosko[] = [item1,item2,item3,item4,item5];

let stockTotal: CargarStock = new CargarStock(productos);

stockTotal.consultarEstado()