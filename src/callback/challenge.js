const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
	let xhttp = new XMLHttpRequest();
	//Abrimos la conexión
	xhttp.open('GET', urlApi, true);
	//Enviamos la petición
	xhttp.onreadystatechange = function (event) {
		//El valor 4 indica que la petición se ha completado
		if (xhttp.readyState === 4) {
			//El valor 200 indica que la petición se ha completado correctamente
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error('Error ' + urlApi);
				return callback(error, null);
			}
		}
	};
	//Enviamos la petición
	xhttp.send();
}
