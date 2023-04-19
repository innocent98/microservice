const router = require("express").Router();

const todoRoute = require("./todo");

router.use("/todo_api", todoRoute);

module.exports = router;
