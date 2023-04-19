const router = require("express").Router();
const sendController = require("../controllers/sendController");

// send
router.post("/send", sendController.sendTodoList);

module.exports = router;
