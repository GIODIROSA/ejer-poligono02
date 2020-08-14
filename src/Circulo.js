//clase hija, formula de circulo
import Poligono from "./Poligono";

class Circulo extends Poligono {
  constructor() {
    super();
    this.id= 2;
    this.name= "circulo";
  }
  area() {
    return Math.pow(this.radio, 2) * Math.PI;
  }
  perimetro() {
    console.log(this);
    return Math.PI * 2 * this.radio;
  }
}

export default Circulo;
