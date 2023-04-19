const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema(
  {
    title: { type: String },
    body: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TodoList", TodoListSchema);
