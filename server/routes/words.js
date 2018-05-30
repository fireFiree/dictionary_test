const router = require("express").Router();

const path = "/api/words";

const controller = require("../controllers/words");

router.get(path, controller.getAll);
router.get(`${path}/:id`, controller.getOne);
router.post(path, controller.create);
router.put(`${path}/:id`, controller.update);
router.delete(`${path}/:id`, controller.remove);

module.exports = router;
