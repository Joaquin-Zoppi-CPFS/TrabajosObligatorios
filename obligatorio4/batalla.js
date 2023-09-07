"use strict";
exports.__esModule = true;
exports.Batalla = void 0;
var Batalla = /** @class */ (function () {
    function Batalla(peleador1, peleador2) {
        this.peleador1 = peleador1;
        this.peleador2 = peleador2;
    }
    Batalla.prototype.pelear = function () {
        while (!(this.peleador1.getEnergia() <= 0 || this.peleador1.getVida() <= 0 || this.peleador2.getVida() <= 0 || this.peleador2.getEnergia() <= 0)) {
            var movimientoAleatorioPeleador1 = Math.floor(Math.random() * 2);
            var movimientoAleatorioPeleador2 = Math.floor(Math.random() * 2);
            if (movimientoAleatorioPeleador1 == 1) {
                this.peleador1.atacar(this.peleador2);
            }
            else {
                this.peleador1.curarMago();
            }
            if (movimientoAleatorioPeleador2 == 1) {
                this.peleador2.atacar(this.peleador1);
            }
            else {
                this.peleador2.curar();
            }
        }
    };
    return Batalla;
}());
exports.Batalla = Batalla;
