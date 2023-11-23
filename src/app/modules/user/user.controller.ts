import { Request, Response } from "express";
import { userServices } from "./user.services";


const createUser= async(req:Request, res:Response)=>{
   try{
    const user= req.body


    // call service function
    const result= await userServices.createUserFromDB(user);
    res.status(200).json({
        success: true,
        message:"User is Created successfully",
        data:result,
    })
    
   }catch(err){
    console.log(err);
   }
}

export const userController={
    createUser

}

