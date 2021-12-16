const { Worker, isMaster, fork } = require('cluster');
const os = require('os');
const fibonacci = require('./fibonacci');

async function main () {
	if (isMaster) {
		console.log('master', process.pid);
		console.time("performance");
		const result = await Promise.all([
			execute(),
			execute(),
			execute(),
			execute(),
			execute(),
			execute(),
			execute(),
			execute(),
			execute(),
			execute()
		]);
		console.log(result);
		console.timeEnd("performance");
	} else {
		console.log('worker', process.pid);
		const result = fibonacci(42);
		process.send({pid: process.pid, result});
	}
}

function execute () {
	return new Promise (function (resolve, reject) {
		const worker = fork();
		worker.on('message', function (message) {
			resolve(message);
		});
	});
}

main();
