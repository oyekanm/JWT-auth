import express from "express";
const router = express.Router();
import {
  authUser,
  logoutUser,
  getUsersProfile,
  registerUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js"

router.post("/auth", authUser);
router.post("/", registerUserProfile);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUsersProfile)
  .put(protect, updateUserProfile); 

export default router;
