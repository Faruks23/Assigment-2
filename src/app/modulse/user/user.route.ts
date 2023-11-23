import express from 'express'
import {  UserController } from './user.controler';

const router = express.Router();

router.post('/users', UserController.createUser)
router.get('/users', UserController.getAllUser)
router.get('/users/:userId', UserController.getSingleUser)
router.put('/users/:userId', UserController.UpdateUserDB)
router.delete('/users/:userId', UserController.deleteUserDB)

export const UserRoute = router;