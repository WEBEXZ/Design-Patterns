var unCarro = {
	drive : function() { },
	name : 'Toyota'
};

var miCarro = Object.create(unCarro);
miCarro.name = 'Audi A3';