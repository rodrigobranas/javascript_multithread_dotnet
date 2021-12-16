function sum (a, b, fn) {
	setTimeout(function () {
		fn(a + b);
	}, 500);
}

console.time("performance");
sum(2, 2, function (a) {
	sum(4, 4, function (b) {
		sum(a, b, function (result) {
			console.log(result);
			console.timeEnd("performance");
		});
	});
});
