//clase hija, formula decagono
import Poligono from "./Poligono";

class Decagono extends Poligono {
  constructor() {
    super();
    this.id = 4;
    this.name = "decagono";
  }
  area() {
    return (this.lado * 10 * this.apotema) / 2;
  }
  perimetro() {
    return this.lado * 10;
  }
}

export default Decagono;
