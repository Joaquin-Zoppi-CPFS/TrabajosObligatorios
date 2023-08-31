"use strict";
exports.__esModule = true;
exports.Kiosko = void 0;
var Kiosko = /** @class */ (function () {
    function Kiosko(item, cantidad, costo, estaVendido) {
        this.item = item;
        this.cantidad = cantidad;
        this.costo = costo;
        this.estaVendido = estaVendido;
    }
    Kiosko.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Kiosko.prototype.getItem = function () {
        return this.item;
    };
    return Kiosko;
}());
exports.Kiosko = Kiosko;
