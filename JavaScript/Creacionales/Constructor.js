function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;
	this.llamar = function() {
		console.log("Hola: ".concat(this.nombre));
	}
}

var carlos = new Persona("Carlos", 20);