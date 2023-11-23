import { Schema, model } from 'mongoose'
import { Address, Order, User, UserName } from './user.interface'

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'First name is required'] },
})

const AddressSchema = new Schema<Address>({
  street: { type: String, required: [true, 'Street  address is required'] },
  city: { type: String, required: [true, 'city  address is required'] },
  country: { type: String, required: [true, 'country  address is required'] },
  

})

const OrderSchema = new Schema<Order>({
  productName: { type: String, required: [true, 'product name is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  quantity:{type: Number, required: [true, 'quantity is required']}
})





const UserSchema = new Schema<User>({
  userId: { type: String, required: [true, 'User id is required'], unique:true},
  username: { type: String, required: [true, 'User id is required'] },
  fullName: UserNameSchema,
  age: { type: Number, required: [true, 'Age is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  isActive: { type: Boolean, required: true },
  address: AddressSchema,
  orders:[OrderSchema]

  
  
   

})

export const UserModal= model<User>('User', UserSchema)
