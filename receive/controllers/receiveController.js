const receiveService = require("../services/receiveService");

const createTodoList = async (req, res) => {
  try {
    const todoList = await receiveService.createTodoList(req.body);
    res.status(200).json(todoList);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createTodoList };
