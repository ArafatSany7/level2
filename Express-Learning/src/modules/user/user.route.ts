import { Router } from "express";
import { userContorller } from "./user.controller";

const router = Router();

router.post("/", userContorller.createUser);
router.get("/", userContorller.getAllUser);
router.get("/:id", userContorller.getSingleUser);
router.put("/:id", userContorller.updateUser);
router.delete("/:id", userContorller.deleteUser);

export const userRoute = router;
