import express from "express";
import { userController } from "./user.controller";

const router= express.Router();


// will call controller function
router.post('/',userController.createStudent)
router.get('/',userController.getAllUsers)

export const UserRoute= router;