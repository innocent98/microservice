const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// register a user
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    if (user) {
      res.status(400).json("user already exists");
    } else {
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      newUser.save();
      res.status(200).json("Registration successful");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// login a user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const accessToken = jwt.sign(
          { id: user._id, uuid: user._id, },
          process.env.JWT_SEC,
          {
            expiresIn: "24h",
          }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken});
      } else {
        res.status(400).json("Invalid username or password");
      }
    } else {
      res.status(400).json("Invalid username or password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
