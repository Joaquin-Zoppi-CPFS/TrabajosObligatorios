"use strict";
exports.__esModule = true;
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, damage, energia) {
        this.nombre = nombre;
        this.vida = vida;
        this.damage = damage;
        this.energia = energia;
    }
    Personaje.prototype.atacar = function (objetivo) {
        if (this.vida > 0 && this.energia > 0) {
            objetivo.setVida(objetivo.getVida() - this.damage);
            console.log(this.nombre + " hiciste " + this.damage + " de daño");
            console.log(objetivo.getNombre() + " tu vida restante: " + Math.floor(objetivo.getVida()));
            this.energia -= 1;
        }
    };
    Personaje.prototype.curar = function () {
        if (this.vida > 0 && this.energia > 0) {
            var cantidadCurada = 5;
            console.log(this.nombre + "te curaste " + cantidadCurada + " de vida");
            this.vida += cantidadCurada;
            this.energia -= 1;
        }
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (nuevaVida) {
        this.vida = nuevaVida;
    };
    Personaje.prototype.aumentarVida = function (valor) {
        this.vida += valor;
    };
    Personaje.prototype.getDamage = function () {
        return this.damage;
    };
    Personaje.prototype.aumentarDamage = function (valor) {
        this.damage += valor;
    };
    Personaje.prototype.getEnergia = function () {
        return this.energia;
    };
    Personaje.prototype.setEnergia = function (valor) {
        this.energia += valor;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
