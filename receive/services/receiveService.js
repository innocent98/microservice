const TodoList = require("../models/TodoList");

const createTodoList = async (todoList) => {
  const newTodolist = new TodoList(todoList);
  const savedTodoList = await newTodolist.save();
  return savedTodoList;
};

module.exports = { createTodoList };
