import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
	const response = fetch(urlApi, {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

const data = {
	title: 'Escuela JS',
	price: 100,
	description: 'Cursos de desarrollo web',
	categoryId: 1,
	images: ['https://placeimg.com/640/480/any'],
};

postData(`${API}/products`, data)
	.then((response) => response.json())
	.then((json) => console.log(json));
