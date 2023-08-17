"use strict";
exports.__esModule = true;
var telefono_1 = require("./telefono");
var telefonoConCamara_1 = require("./telefonoConCamara");
var telefonoConRadio_1 = require("./telefonoConRadio");
var telefono1 = new telefono_1.Telefono(true, 50, "Samsung");
var telefono2 = new telefono_1.Telefono(false, 0, "Motorola");
var telefono3 = new telefonoConCamara_1.TelefonoConCamara(true, 50, "Iphone");
var telefono4 = new telefonoConRadio_1.TelefonoConRadio(true, 50, "Xiaomi", 120);
var telefonos = new Array();
telefonos.push(telefono1);
telefonos.push(telefono2);
telefonos.push(telefono3);
telefonos.push(telefono4);
console.log(telefono1.prenderApagar());
console.log(telefono1.mandarMensaje());
console.log(telefono1.hacerLlamada(2983777777));
console.log(telefono3.sacarFotos());
console.log(telefono4.verFrecuenciaActual());
