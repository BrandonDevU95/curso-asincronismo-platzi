function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(6, 2, sum));

setTimeout(function () {
	console.log('Hello World');
}, 3000);

function grettin(name) {
	console.log(`Hello ${name}`);
}

setTimeout(grettin, 3000, 'Jhon');
