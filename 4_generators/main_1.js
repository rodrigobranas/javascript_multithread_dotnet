function* infinity () {
	let i = 0;
	while (true) {
		console.log(i++);
		yield;
	}
}

function date () {
	console.log(new Date());
}

const infinityGenerator = infinity();
infinityGenerator.next();
infinityGenerator.next();
infinityGenerator.next();
date();
infinityGenerator.next();
infinityGenerator.next();
infinityGenerator.next();
