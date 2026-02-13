import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser, 
  loginUser
} from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);

export default router;
