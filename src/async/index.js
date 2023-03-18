const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Hello World'), 3000)
			: reject(new Error('Test Error'));
	});
};

const fnAsyncAwait = async () => {
	const hello = await fnAsync();
	console.log(hello);
	console.log('After');
};

console.log('Before');
fnAsyncAwait();
console.log('After of fnAsyncAwait');
