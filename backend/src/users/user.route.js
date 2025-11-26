const express = require("express");
const User = require("./user.model");

const router = express.Router();

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    if (username.password !== admin.password) {
      res.status(401).send({ message: "Invalid password" });
    }
    
  } catch (error) {
    console.error("failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
