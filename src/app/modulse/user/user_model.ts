import { Schema, model } from 'mongoose'
import { Gardens, LocalGarden, Student, UserName } from './user.interface'

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String },
  middleName: { type: String, required: [true, 'Middle name is required'] },
})

const GardensSchema = new Schema<Gardens>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  fatherCaption: {
    type: String,
    required: [true, 'Father caption is required'],
  },
  motherCaption: {
    type: String,
    required: [true, 'Mother caption is required'],
  },
  fatherContact: {
    type: String,
    required: [true, 'Father contact is required'],
  },
  motherContact: {
    type: String,
    required: [true, 'Mother contact is required'],
  },
})

const LocalGardenSchema = new Schema<LocalGarden>({
  name: { type: String, required: [true, 'Name is required'] },
  occupation: { type: String, required: [true, 'Occupation is required'] },
  contact: { type: String, required: [true, 'Contact is required'] },
  address: { type: String, required: [true, 'Address is required'] },
})

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: UserNameSchema, required: [true, 'Name is required'] },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyNumber: { type: String },
  bloodGroups: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  gardens: {
    type: GardensSchema,
    required: [true, 'Gardens info is required'],
  },
  localGarden: {
    type: LocalGardenSchema,
    required: [true, 'Local garden info is required'],
  },
  isActive: { type: String, enum: ['active', 'inactive'], default: 'active' },
})

export const StudentModal = model<Student>('Student', StudentSchema)
