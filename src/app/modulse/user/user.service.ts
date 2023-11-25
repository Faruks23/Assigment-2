import { Order, User } from './user.interface'
import { UserModal } from './user_model'

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
  const result = await UserModal.findOne({ userId: id })
  return result
}

const UpdateUserInfo = async (id: string, data: User) => {
  const filter = { userId: id }
  const updateDoc = {
    $set: {
      userId: data.userId,
      username: data.username,
      'fullName.firstName': data.fullName.firstName,
      'fullName.lastName': data.fullName.lastName,
      age: data.age,
      isActive: data.isActive,
      hobbies: data.hobbies,
      'address.city': data.address.city,
      'address.street': data.address.street,
      'address.country': data.address.country,
    },
  }
  const result = await UserModal.findOneAndUpdate(filter, updateDoc)
  return result
}

const deleteUserDB = async (id: string) => {
  const result = await UserModal.deleteOne({ id: id })
  return result
}


// add new order in user order list
const AddNewOrder = async (userId: string, orderData: Order) => {
  const filter = { userId }
  const update = {
    $push: {
      orders: orderData,
    },
  }
  const result = await UserModal.findOneAndUpdate(filter, update, {
    new: true,
  })
  return result
}

// const getOrderList = async( userId:string )=> {
//   try {
//     const result = await UserModal.findOne({ userId: userId })
//     const order =  result?.orders;
//     return order
//   } catch (error) {
//     console.error('Error fetching orders:', error)
//     throw error
//   }
// }
const getOrderList = async (userId:string) => {
  try {
    const result = await UserModal.findOne({ userId: userId }).select('orders')
    return result?.orders
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw error
  }
}
// get total price 
const getTotalPrice = async (userId: string) => {
  try {
    console.log(userId, 'from services')
    const totalPrice = await UserModal.aggregate([
      { $match: {userId:userId} },
      { $unwind: '$orders' },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalPrice: 1,
        },
      },
    ])
    console.log(totalPrice)
    return totalPrice
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}



export const UserService = {
  createUserDB,
  getAllUserDB,
  getSingleUserDB,
  deleteUserDB,
  UpdateUserInfo,
  AddNewOrder,
  getOrderList,
  getTotalPrice,
}
