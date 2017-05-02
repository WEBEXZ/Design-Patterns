var modulo = (function() {
	var variablePrivada = 5;
	
	var metodoPrivado = function(){
		return 'Método Privado';
	};

	return {
		variablePublica : 10,
		metodoPublico : function() {
			return 'Método Público';
		},
		getDatos : function() {
			return metodoPrivado().concat(' ', this.metodoPublico(), ' ', variablePrivada);
		}
	};
})();

//APLICACIÓN
modulo.getDatos();