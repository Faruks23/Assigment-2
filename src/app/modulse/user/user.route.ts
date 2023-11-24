import express from 'express'
import {  UserController } from './user.controler';

const router = express.Router();

router.post('/users', UserController.createUser)
router.get('/users', UserController.getAllUser)
router.get('/users/:userId', UserController.getSingleUser)
router.put('/users/:userId', UserController.UpdateUserDB)
router.delete('/users/:userId', UserController.deleteUserDB)
router.put('/users/:userId/orders', UserController.AddNewOrder)
router.get('/users/:userId/orders', UserController.getOrder)

export const UserRoute = router;