import express from "express";
import { userController } from "./user.controller";

const router= express.Router();


// call controller function
router.post('/users',userController.createUser)