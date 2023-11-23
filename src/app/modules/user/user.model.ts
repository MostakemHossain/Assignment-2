import { model, Schema } from 'mongoose';
import { Address, FullName, Order, TUser } from './user.interface';

const fullNameSchema = new Schema<FullName>({
    firstName: { type: String },
    lastName: { type: String },
});

const AddressSchema = new Schema<Address>({
    street: { type: String },
    city: { type: String },
    country: { type: String },
});

const OrderSchema = new Schema<Order>({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
});

const userSchema = new Schema<TUser>({
    userId: { type: Number, unique: true },
    username: { type: String, unique: true },
    password: { type: String },
    fullName: fullNameSchema,
    age: { type: Number },
    email: { type: String },
    isActive: { type: String, enum: ['active', 'inactive'] },
    hobbies: { type: [String] },
    address: AddressSchema,
    orders: { type: [OrderSchema] },
});

const UserModel = model<TUser>('User', userSchema);
export default UserModel;