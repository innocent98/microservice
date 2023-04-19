const router = require("express").Router();
const receiveController = require("../controllers/receiveController");

// create a todo
router.post("/create", receiveController.createTodoList);

module.exports = router;
