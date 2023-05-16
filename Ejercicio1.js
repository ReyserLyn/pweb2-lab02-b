function obtenerNomDia(num){
	const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
	
	return dias [num];
}

const fechaActual = new Date();
const diaActual = fechaActual.getDay();

const nombreDia = obtenerNomDia(diaActual);
console.log(nombreDia);
