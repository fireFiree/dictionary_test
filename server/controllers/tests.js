const Test = require("../models/Test");

const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("lalala");
});

router.post("/", (req, res) => {
	res.send("post");
});

router.put("/", (req, res) => {
	res.send("put");
});

router.delete("/", (req, res) => {
	res.send("delete");
});

module.exports = router;
