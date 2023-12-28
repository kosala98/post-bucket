const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

function login(req, res) {
  res.json({ mag: "login Ok!" });
}

// User Register
async function register(req, res) {
  try {
    const { username, password, email } = req.body;

    // Password Hashing
    const passwordHash = await bcrypt.hash(password, 12);

    // Validations
    if (!username || !password || !email) {
      res.status(400).json({ msg: "All fields are required.!" });
    }

    const dbRes = await UserModel.create({
      username,
      password: passwordHash,
      email,
    });
    console.log(dbRes);
    res.json({ msg: "User Created" });
  } catch (error) {
    res.status(500).json({ msg: "Server side Error occured.!" });
  }
}

module.exports = { login, register };
