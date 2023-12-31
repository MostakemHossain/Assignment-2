import express from "express";
import { userController } from "./user.controller";

const router= express.Router();


// will call controller function
router.post('/',userController.createStudent)
router.get('/',userController.getAllUsers)

router.get('/:userId',userController.getSingleUser);
router.delete('/:userId',userController.deleteAUser);

export const UserRoute= router;