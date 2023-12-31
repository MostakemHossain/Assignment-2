import { Model } from "mongoose";

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: 'active' | 'inactive';
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Array<{
    productName: string;
    price: number;
    quantity: number;
  }>,
  // isDeleted: boolean;
};


export type userMethods={
  isUserExists(id: string): Promise<TUser | null>
}

export type userModel= Model<TUser,Record<string, never>,userMethods>