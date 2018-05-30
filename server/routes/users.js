const router = require("express").Router();

const path = "/api/users";

const controller = require("../controllers/users");

router.get(path, controller.getAll);
router.post(path, controller.create);
router.put(`${path}/:id`, controller.update);
router.delete(`${path}/:id`, controller.remove);

module.exports = router;
