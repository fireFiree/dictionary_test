const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./etc/config.json");

const routes = require("./routes");

const app = express();

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/usersdb`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => { console.log("Mongoose connection is open"); });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all("/*", (req, res, next) => {
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(routes);

app.listen(config.serverPort, () => {
	console.log("Server is running!");
});

