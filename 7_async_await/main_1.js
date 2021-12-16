function sum (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
}

(async function () {
	console.time("performance");
	const a = await sum(2, 2);
	const b = await sum(4, 4);
	const result = await sum(a, b);
	console.log(result);
	console.timeEnd("performance");
})();

// sum(2, 2).then(function (a) {
// 	sum(4, 4).then(function (b) {
// 		sum(a, b).then(function (result) {
// 			console.log(result);
// 		});
// 	});
// });
