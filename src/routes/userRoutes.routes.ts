import { Router } from 'express'
import createUserController from '../controllers/createUser.controller'
import listUserController from '../controllers/listUsers.controller'

const userRoute = Router()

userRoute.get('', listUserController)
userRoute.post('/signup',createUserController)

export default userRoute