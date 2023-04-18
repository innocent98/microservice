const router = require("express").Router();
const TodoList = require("../models/TodoList");
const { verifyTokenAndAuthorization } = require("./jwt");

// create a todo
router.post("/create", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const newTodolist = new TodoList({
      title: req.body.title,
      body: req.body.body,
      by: req.user.uuid,
    });
    newTodolist.save();
    res.status(200).json(newTodolist);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a list of todos of a user
router.get("/todolist", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = req.user.uuid;
    const getTodolist = await TodoList.find({ by: user });
    if (getTodolist.length > 0) {
      res.status(200).json(getTodolist);
    } else {
      res.status(404).json("No Data Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all list of todos
router.get("/todolist/all", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getTodolist = await TodoList.find();
    if (getTodolist.length > 0) {
      res.status(200).json(getTodolist);
    } else {
      res.status(404).json("No Data Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}); 

module.exports = router;
