function sum (a, b) {
	setTimeout(function () {
		return a + b;
	}, 500);
}

const a = sum(2, 2);
const b = sum(4, 4);
const result = sum(a, b);
console.log(result);
