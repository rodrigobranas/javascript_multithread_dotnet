function sum (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
}

function async (fn) {
	const gen = fn();
	gen.next().value.then(function (a) {
		gen.next(a).value.then(function (b) {
			gen.next(b).value.then(function (result) {
				console.log(result);
			});
		});
	});
}

async(function* () {
	console.time("performance");
	const a = yield sum(2, 2);
	const b = yield sum(4, 4);
	const result = yield sum(a, b);
	console.log(result);
	console.timeEnd("performance");
});
