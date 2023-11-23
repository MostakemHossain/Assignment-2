import { Request, Response } from "express";
import userValidationSchema from "./student.validation";
import { UserServices } from "./user.services";

const createStudent= async (req:Request,res:Response)=>{
   try{
    const {user:userData}= req.body;
    // will call service function to send this data

    // data validation with zod
    const validateData= userValidationSchema.parse(userData);

    const result= await UserServices.createUSerIntoDB(validateData);
    res.status(200).json(({
        success:true,
        message:"User is created successfully",
        data:result
    }))
   }catch(err){
    res.status(500).json({
        success:false,
        message:"Error in creating user",
        data:err
    })
   }
}
const getAllUsers=async (req:Request,res:Response)=>{
    try{
        const result= await UserServices.getAllUserFromDB()
        res.status(200).json(({
            success:true,
            message:"Users fetched successfully!",
            data:result
        }))
       }catch(err){
        console.log(err);
       }
        
    }


    const  getSingleUser= async(req:Request,res:Response)=>{
        try{
            const {userId} = req.params;
            const result= await UserServices.getSingleUserFromDB(userId);
            res.status(200).json(({
                success:true,
                message:"User fetched successfully!",
                data:result
            }))

        }catch(err){
            console.log(err);
        }

    }


export const userController={
    createStudent,
    getAllUsers,
    getSingleUser
}