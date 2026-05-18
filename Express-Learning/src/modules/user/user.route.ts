import { Router } from "express";
import { userContorller } from "./user.controller";

const router = Router();

router.post("/", userContorller.createUser);

export const userRoute = router;
