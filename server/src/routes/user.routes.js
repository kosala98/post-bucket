const { Router } = require("express");
const {
  login,
  register,
  getUserData,
} = require("../controller/user.controller");

const useRouter = Router();

useRouter.post("/login", login);
useRouter.post("/register", register);
useRouter.get("/get", getUserData);

module.exports = useRouter;
