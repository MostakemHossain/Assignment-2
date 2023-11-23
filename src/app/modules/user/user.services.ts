import { TUser } from "./user.interface";
import { User } from "./user.model";



const createUSerIntoDB=async(userData:TUser)=>{

    // const result= await User.create(user);
    // return result;

    const user= new User(userData);
    
    const result= await user.save();
    return result;

}

const getAllUserFromDB= async()=>{
    const result= await User.find().select('username fullName age email address');

    return result;
}

const getSingleUserFromDB= async(_id:string)=>{
    const result= await User.findOne({_id}).select('-password');
    return result;
    

}

export const UserServices={
    createUSerIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB

}