const { Router } = require("express");
const { login } = require("../controller/user.controller");

const useRouter = Router();

useRouter.post("/login", login);

module.exports = useRouter;
