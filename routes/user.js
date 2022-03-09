const express = require("express");
const {
  register,
  login,
  logout,
  getAllUser,
  updateUserRole,
  deleteUser,
  getUser,
} = require("../controllers/user");
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/user")
  // .get(isAuthenticateUser, authorizeRoles("leader"), getAllUser);
  .get(getAllUser);
router
  .route("/user/:id")
  // .patch(isAuthenticateUser, authorizeRoles("leader"), updateUserRole)
  // .delete(isAuthenticateUser,authorizeRoles("leader"),deleteUser)
  .patch(updateUserRole)
  .delete(deleteUser)
  .get(getUser)

module.exports = router;
