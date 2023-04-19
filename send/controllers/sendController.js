const axios = require("axios");

const sendTodoList = async (req, res) => {
  try {
    const input = req.body;
    const result = await axios.post(
      "http://localhost:8082/todo_api/create",
      input
    );
    res.status(200).json(result.data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { sendTodoList };
