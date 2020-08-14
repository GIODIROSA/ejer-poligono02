import Circulo from "./Circulo";
import Triangulo from "./Triangulo";
import Rectangulo from "./Rectangulo";
import Octagono from "./Octagono";
import Decagono from "./Decagono";

document
  .getElementsByTagName("select")[0]
  .addEventListener("change", function (e) {
    let poligono = e.target.value;
    // console.log (poligono);

    //instancias de los poligono
    let circulo = new Circulo ()
    let triangulo = new Triangulo ()
    let rectangulo = new Rectangulo ()
    let octagono = new Octagono ()
    let decagono = new Decagono ()
    //array de las variable que contienen las instancias de los poligonos
    let arrayPoligono = [circulo, triangulo, rectangulo, octagono, decagono];

    //iterador del array
    arrayPoligono.forEach(x => {
      if(poligono == x.id){
        console.log(`Esta es el area = ${x.area()}`);
        console.log(`Esta es el perimetro = ${x.perimetro()}`);


      }
    })




  });
