const userRouter = require("./users");
const wordRouter = require("./words");

const router = require("express").Router();

router.use(userRouter);
router.use(wordRouter);

module.exports = router;
