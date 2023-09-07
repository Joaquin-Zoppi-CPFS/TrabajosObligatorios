"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, vida, damage, energia) {
        return _super.call(this, nombre, vida, damage, energia) || this;
    }
    Mago.prototype.caracteristicasMago = function () {
        this.armaduraLigera = 20;
        this.energiaExtra = 10;
        _super.prototype.aumentarVida.call(this, this.armaduraLigera);
        _super.prototype.setEnergia.call(this, this.energiaExtra);
    };
    Mago.prototype.curarMago = function () {
        _super.prototype.curar.call(this);
        this.curacionExtra = 10;
        _super.prototype.aumentarVida.call(this, this.curacionExtra);
        console.log(_super.prototype.getNombre.call(this) + "Te curaste " + this.curacionExtra + " de vida extra");
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
