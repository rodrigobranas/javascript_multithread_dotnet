function sum (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
}

console.time("performance");
Promise.all([
	sum(2, 2),
	sum(4, 4)
]).then(function (result) {
	const [a, b] = result;
	sum(a, b).then(function (result) {
		console.log(result);
		console.timeEnd("performance");
	});
});
