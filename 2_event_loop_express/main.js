const express = require("express");
const app = express();

app.get("/infinity", function (req, res) {
	let i = 0;
	while (i < 500000) {
		console.log(i++);
	}
});

app.get("/date", function (req, res) {
	res.json({
		date: new Date()
	})
});

app.listen(3000);
