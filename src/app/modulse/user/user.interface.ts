// import { Schema, model, connect } from 'mongoose'


export type UserName = {
  firstName: string
  lastName: string
}





export type User = {
  userId: string
  username: string
  fullName: UserName
  age: number
  email: string
  isActive: boolean
  hobbies:string[]
  address: {
    street: string
    city: string
    country: string
  }
}