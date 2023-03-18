import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetData(urlApi) {
	const response = await fetch(urlApi);
	const json = await response.json();
	return json;
}

const anotherFunction = async (urlApi) => {
	try {
		const products = await fetData(`${urlApi}/products`);
		const product = await fetData(`${urlApi}/products/${products[0].id}`);
		const category = await fetData(
			`${urlApi}/categories/${product.category.id}`
		);
		console.log(`Titulo: ${product.title}, Category: ${category.name}`);
	} catch (error) {
		console.log(error);
	}
};

console.log('Before');
anotherFunction(API);
console.log('After');
