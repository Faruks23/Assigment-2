import express from 'express'
import { StudentController } from './user.controler';

const router = express.Router();

router.post('/users', StudentController.createStudent)
router.get('/', StudentController.getAllStudent)
router.get('/:StudentId', StudentController.getSingleStudent)
router.delete('/:StudentId', StudentController.deleteStudentDB)

export const UserRoute = router;