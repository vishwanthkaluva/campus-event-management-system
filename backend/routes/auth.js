const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Demo user
const user = {
  email: "admin@gmail.com",
  password: "1234"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ email }, "secretkey", { expiresIn: "1h" });

    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;