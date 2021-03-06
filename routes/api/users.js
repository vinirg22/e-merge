const router = require("express").Router();

const isAuthenticated = require("../../config/isAuthenticated");

const userController = require("../../controllers/userController");

router.route("/signup")
    .post(userController.signup);

router.route("/login")
    .post(userController.login);

router.route("/:id", isAuthenticated)
    .get(userController.getProfile)

router.route("/zip/:id")
    .get(userController.validateZip)

module.exports = router;

