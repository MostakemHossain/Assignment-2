import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import config from '../../config';
import { TUser, userMethods, userModel } from './user.interface';

const userSchema = new Schema<TUser, userModel, userMethods>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: String, enum: ['active', 'inactive'], required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    type: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  // isDeleted:{
  //   type:Boolean,
  //   default:false
  // }
});

userSchema.pre('save', async function (next) {
  //hashing password
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

userSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await User.findOne({ id });
  return existingUser;
};

export const User = model<TUser, userModel>('User', userSchema);
