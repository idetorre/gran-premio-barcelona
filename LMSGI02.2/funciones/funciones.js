function mostrarMensaje() {
	alert("Bienvenido a la web de un fan del Gran Premio de Barcelona-Catalunya.");
}

function mostrarCircuito() {
	document.getElementById("informacion").textContent = "El circuito tiene una longitud de 4,657 km y 14 curvas.";
}

function validarFormulario() {
	let nombre = document.getElementById("nombre").value;
	let correo = document.getElementById("correo").value;
	let mensaje = document.getElementById("mensaje").value;
	
	if (nombre == "" || correo == "" || mensaje == "") {
	alert("Por favor, completa todos los campos.");
	return false;
}

	return true;
}
