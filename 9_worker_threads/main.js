const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const fibonacci = require('./fibonacci');

async function main () {
	if (isMainThread) {
		console.time("performance");
		const result = await Promise.all([
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47),
			execute(47)
		]);
		console.log(result);
		console.timeEnd("performance");
	} else {
		const result = fibonacci(workerData.number);
		parentPort.postMessage({ result });
	}
}

function execute (number) {
	return new Promise(function (resolve) {
		const worker = new Worker(__filename, { workerData: { number } });
		worker.on('message', function (message) {
			resolve(message);
		});
	});
}

main();
