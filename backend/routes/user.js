const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./auth");

// SIGN UP APIs
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, role } = req.body;
    console.log(role);
    const existingUser = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    } else if (username.length < 4) {
      return res.status(400).json({ message: "Username should have at least 4 characters" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
      isAdmin: role === "admin",
    });
    await newUser.save();
    return res.status(200).json({ message: "SignUp successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// LOGIN 
router.post("/log-in", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (!existingUser) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  bcrypt.compare(password, existingUser.password, (err, data) => {
    if (data) {
      const authClaims = [{ name: username }, { jti: jwt.sign({}, "jwttoken") }];
      const token = jwt.sign({ authClaims }, "jwttoken", { expiresIn: "2d" });
      res.status(200).json({ id: existingUser._id, token: token, isAdmin: existingUser.isAdmin });
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  });
});

// Get User Details
router.get("/user-details", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id).select("username email isAdmin");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = router;