"use strict";
exports.__esModule = true;
exports.CargarStock = void 0;
var CargarStock = /** @class */ (function () {
    function CargarStock(stock) {
        this.stock = stock;
    }
    CargarStock.prototype.consultarEstado = function () {
        for (var i = 0; i < this.stock.length; i++) {
            if (this.stock[i].getCantidad() <= 0) {
                console.log("El producto " + this.stock[i].getItem() + " esta agotado");
            }
            else {
                console.log("El producto " + this.stock[i].getItem() + " todavia tiene Stock");
            }
        }
    };
    return CargarStock;
}());
exports.CargarStock = CargarStock;
