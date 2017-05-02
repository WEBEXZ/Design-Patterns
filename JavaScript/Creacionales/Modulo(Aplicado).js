var Persona = (function(){
	var nombre = '';
	var edad = 0;

	function _setNombre(name) {
		nombre = name;
	}

	function _setEdad(age) {
		edad = age;
	}

	function _getNombre() {
		return nombre;
	}

	function _getEdad() {
		return edad;
	}	

	return {
		setNombre : _setNombre,
		setEdad : _setEdad,
		getNombre : _getNombre,
		getEdad : _getEdad
	};
})();

Persona.setNombre('Carlos');
Persona.getNombre();