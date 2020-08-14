//class padre
class Poligono  {
    constructor(){
        //carga de input desde el DOM
        this.lado = document.getElementById("lado").value || null,
        this.base = document.getElementById("base").value || null,
        this.altura = document.getElementById("altura").value || null,
        this.radio = document.getElementById("radio").value || null,
        this.apotema = document.getElementById("apotema").value || null
    }

}

export default Poligono