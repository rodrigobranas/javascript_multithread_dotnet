function* fn () {
	const a = yield 1;
	const b = yield 2 + a;
	yield 3 + b;
}

const generator = fn();
console.log(generator.next());
console.log(generator.next(1));
console.log(generator.next(2));
console.log(generator.next());
