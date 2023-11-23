import { Request, Response } from 'express'
import { StudentService } from './user.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body
    const result = await StudentService.createStudentDB(student)
    console.log(student, 'form student')
    if (result) {
      res.status(200).json({
        success: true,
        message: 'student created successfully',
        data: result,
      })
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'student created successfully',
      data: error,
    })
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentDB()
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params
    const result = await StudentService.getSingleStudentDB(StudentId)
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentDB = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params
    const result = await StudentService.deleteStudentDB(StudentId)
    res.status(200).json({
      success: true,
      message: 'student delete successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudentDB,
}
