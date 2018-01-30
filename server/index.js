const express = require("express");
const bodyParser = require("body-parser");

const serverPort = require("./etc/config.json").serverPort;

const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all("/*", (req, res, next) => {
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(userRouter);

app.listen(serverPort, () => {
	console.log("Server is running!");
});

