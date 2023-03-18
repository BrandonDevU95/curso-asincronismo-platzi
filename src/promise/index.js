const promise = new Promise((resolve, reject) => {
	resolve('success');
});

const cows = 1;

const countCows = new Promise((resolve, reject) => {
	if (cows > 10) {
		resolve('There are too many cows!');
	} else {
		reject('There are not enough cows!');
	}
});

countCows
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
