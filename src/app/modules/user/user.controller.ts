import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createStudent= async (req:Request,res:Response)=>{
   try{
    const {user:userData}= req.body;
    // will call service function to send this data

    const result= await UserServices.createUSerIntoDB(userData);
    res.status(200).json(({
        success:true,
        message:"User is created successfully",
        data:result
    }))
   }catch(err){
    console.log(err);
   }

}

export const userController={
    createStudent
}