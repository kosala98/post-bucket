const { Router } = require("express");
const useRouter = require("./user.routes");

const router = Router();

router.use("/user/", useRouter);

module.exports = router;
