//clase hija, formula de octagono
import Poligono from "./Poligono";

class Octagono extends Poligono {
  constructor() {
    super();
    this.id= 3;
    this.name = "octagono";
  }
  area() {
    return (this.lado * 8 * this.apotema) / 2;
  }
  perimetro() {
    return this.lado * 8;
  }
}

export default Octagono;
