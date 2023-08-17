"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var readline = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual, modelo) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
        this.modelo = modelo;
    }
    Telefono.prototype.mandarMensaje = function () {
        if (this.estaPrendido == true && this.bateriaActual > 0) {
            var mensaje = readline.question("Escriba su mensaje: ");
            console.log(mensaje);
        }
        else {
            console.log("El telefono no esta encendido");
        }
    };
    Telefono.prototype.hacerLlamada = function (nro) {
        if (this.estaPrendido == true && this.bateriaActual > 0) {
            console.log("llamando... al numero: " + nro);
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido == false) {
            var encender = readline.question("Quieres prender el dispositivo? Si/No");
            if (encender.toLowerCase() == "si") {
                this.estaPrendido = true;
                console.log("El dispositivo se encendera");
            }
            else {
                console.log("El disposivo no se encendera");
            }
        }
        if (this.estaPrendido == true) {
            var apagar = readline.question("Quieres apagar el dispositivo? Si/No");
            if (apagar.toLowerCase() == "si") {
                this.estaPrendido = false;
                console.log("El dispositivo se apagara");
            }
            else {
                console.log("El dispositivo no se apagara");
            }
        }
    };
    Telefono.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
