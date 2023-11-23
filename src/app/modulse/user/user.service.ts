import {  User } from './user.interface'
import {UserModal } from './user_model'

const createUserDB = async (user: User) => {
  const result = await UserModal.create(user)
  console.log(result)
  return result
}

const getAllUserDB = async () => {
  const result = await UserModal.find()
  return result
}

const getSingleUserDB = async (id: string) => {
  const result = await UserModal.findOne({ id: id })
  return result
}

const UpdateUserInfo = async (id: string, data: User) => {
  
  const filter = { userId: id }
   const updateDoc = {
     $set: {
       userId: data.userId,
       username: data.username,
       "fullName.firstName": data.fullName.firstName,
       "fullName.lastName": data.fullName.lastName,
       age: data.age,
       isActive: data.isActive,
       hobbies: data.hobbies,
       "address.city": data.address.city,
       "address.street": data.address.street,
       "address.country": data.address.country,

     },
   }
  const result = await UserModal.findOneAndUpdate(filter, updateDoc)
  return result
}



const deleteUserDB = async (id: string) => {
  const result = await UserModal.deleteOne({ id: id })
  return result
}

export const UserService = {
  createUserDB,
  getAllUserDB,
  getSingleUserDB,
  deleteUserDB,
  UpdateUserInfo,
}
