//class hijo, formula de triangulo
import Poligono from "./Poligono";

class Triangulo extends Poligono {
  constructor() {
    super();
    this.id= 1;
    this.name= "triangulo";
  }
  area() {
    return (this.base * this.altura) / 2;
  }
  perimetro() {
    return this.lado * 3;
  }
}

export default Triangulo;
