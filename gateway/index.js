const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const proxy = require("express-http-proxy");

//   middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

app.use("/todo_api", proxy("http://localhost:8082"));
app.use("/auth_api", proxy("http://localhost:8081"));

// connection to the server
app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port 8080");
});
