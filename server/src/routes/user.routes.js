const { Router } = require("express");
const { login, register } = require("../controller/user.controller");

const useRouter = Router();

useRouter.post("/login", login);
useRouter.post("/register", register);

module.exports = useRouter;
