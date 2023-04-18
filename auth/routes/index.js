const router = require("express").Router();

const authRoute = require("./auth");

router.use("/auth_api", authRoute);

module.exports = router;
