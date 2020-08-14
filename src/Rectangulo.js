//clase hija, formula de rectangulo
import Poligono from "./Poligono";

class Rectangulo extends Poligono {
  constructor() {
    super();
    this.id= 5;
    this.name = "rectangulo";
  }
  area() {
    return this.base * this.altura;
  }
  perimetro() {
    return this.base * 2 + this.altura * 2;
  }
}

export default Rectangulo;
