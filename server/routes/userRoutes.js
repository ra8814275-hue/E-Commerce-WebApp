const express = require("express");

const controller = require("../controllers/userControllers");
console.log(controller);
console.log(controller.registerUser);
console.log(controller.loginUser);
console.log(controller.getProfile);
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/profile", protect, controller.getProfile);

module.exports = router;
