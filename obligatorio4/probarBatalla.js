"use strict";
exports.__esModule = true;
var batalla_1 = require("./batalla");
var mago_1 = require("./mago");
var guerrero_1 = require("./guerrero");
var personaje1 = new mago_1.Mago("Pablo", 100, 15, 30);
var personaje2 = new guerrero_1.Guerrero("Jorge", 80, 10, 50);
var iniciarPelea = new batalla_1.Batalla(personaje1, personaje2);
iniciarPelea.pelear();
