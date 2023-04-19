const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes/index");

dotenv.config();

//   middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

app.use(router);

// connection to the server
app.listen(process.env.PORT || 8081, () => {
  console.log("Server running on port 8081");
});
