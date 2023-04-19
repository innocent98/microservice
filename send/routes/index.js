const router = require("express").Router();

const authRoute = require("./send");

router.use("/auth_api", authRoute);

module.exports = router;
