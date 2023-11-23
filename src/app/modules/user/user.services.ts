import { TUser } from "./user.interface";
import { UserModel } from "./user.model";



const createUSerIntoDB=async(user:TUser)=>{

    const result= await UserModel.create(user);
    return result;

}

const getAllUserFromDB= async()=>{
    const result= await UserModel.find().select('username fullName age email address');

    return result;
}

export const UserServices={
    createUSerIntoDB,
    getAllUserFromDB

}