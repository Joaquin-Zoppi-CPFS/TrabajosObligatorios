import { Personaje } from "./personaje";
import { Batalla } from "./batalla";
import { Mago } from "./mago";
import { Guerrero } from "./guerrero";

let personaje1: Mago = new Mago("Pablo",100,15,30);
let personaje2: Guerrero = new Guerrero("Jorge",80,10,50);

let iniciarPelea: Batalla= new Batalla(personaje1,personaje2);

iniciarPelea.pelear()