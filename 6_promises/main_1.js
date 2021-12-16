function sum (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
}

console.time("performance");
sum(2, 2).then(function (a) {
	sum(4, 4).then(function (b) {
		sum(a, b).then(function (result) {
			console.log(result);
			console.timeEnd("performance");
		});
	});
});
