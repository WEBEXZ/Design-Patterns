var SingletonTester = (function() {
	//CONSTRUCTOR
	function Singleton(argumentos) {
		var argumentos = argumentos || {};
		this.nombre = 'Linea';
		this.puntoX = argumentos.puntoX || 10;
		this.puntoY = argumentos.puntoY || 20;
	}

	var instancia;

	var _statica = {
		nombre : 'Linea',
		getInstancia : function(argumentos) {
			if(instancia === undefined) {
				instancia = new Singleton(argumentos);
			}
			return instancia;
		}
	};
	return _statica;
})();

//APLICACIÓN
var singletonTester = SingletonTester.getInstancia({puntoX : 15});
console.log(singletonTester.puntoX);