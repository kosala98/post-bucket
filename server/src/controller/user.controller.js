const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_TOKEN = process.env.JWT_TOKEN;

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const token = jwt.sign(
        {
          _id: user.id,
          username: user.username,
          email: user.email,
        },
        JWT_TOKEN,
        { expiresIn: "11h" }
      );
      res.json({ token });
    } else {
      res.status(401).json({ msg: "Unauthorized.! " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server side Error occured.!" });
  }
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
    console.log(error);
    res.status(500).json({ msg: "Server side Error occured.!" });
  }
}

async function getUserData(req, res) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "Unauthorized.!" });
    }

    const _tokenData = token.split(" ")[1];

    const _decoded = jwt.verify(_tokenData, JWT_TOKEN);
    const id = _decoded._id;
    const user = await UserModel.findById(id);
    const { password, ...rest } = user._doc;
    res.json({ user: rest });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server side Error occured.!" });
  }
}

module.exports = { login, register, getUserData };
