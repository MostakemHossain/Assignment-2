import { TUser } from './user.interface';
import { User } from './user.model';

const createUSerIntoDB = async (userData: TUser) => {
  const result= await User.create(userData);
  return result;

};

const getAllUserFromDB = async () => {
  const result = await User.find().select(
    'username fullName age email address',
  );

  return result;
};

const getSingleUserFromDB = async (userId: string) => {
 
  const result = await User.findOne({
 
  }).select('-password');
  return result;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await User.deleteOne({ userId});
  return result;
};
export const UserServices = {
  createUSerIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
};