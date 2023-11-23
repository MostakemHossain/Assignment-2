import express from "express";
import { userController } from "./user.controller";

const router= express.Router();


// will call controller function
router.post('/',userController.createStudent)

export const UserRoute= router;