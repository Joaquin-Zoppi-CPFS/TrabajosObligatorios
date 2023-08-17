import { Telefono } from "./telefono";
import { TelefonoConCamara } from "./telefonoConCamara";
import { TelefonoConRadio } from "./telefonoConRadio";


let telefono1: Telefono = new Telefono(true, 50, "Samsung");
let telefono2: Telefono = new Telefono(false, 0, "Motorola");
let telefono3: TelefonoConCamara = new TelefonoConCamara(true, 50, "Iphone");
let telefono4: TelefonoConRadio = new TelefonoConRadio(true, 50, "Xiaomi",120);

let telefonos: Telefono[] = new Array ()

telefonos.push(telefono1)
telefonos.push(telefono2)
telefonos.push(telefono3)
telefonos.push(telefono4)

console.log(telefono1.prenderApagar())
console.log(telefono1.mandarMensaje())
console.log(telefono1.hacerLlamada(2983777777))
console.log(telefono3.sacarFotos())
console.log(telefono4.verFrecuenciaActual())







