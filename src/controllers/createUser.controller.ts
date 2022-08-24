import { Request, Response } from 'express'
import { IUsers } from '../interfaces/users'
import createUserService from '../services/createUser.service'

const createUserController = async (req: Request, res: Response) => {
    try {
        const {name, email, password} : IUsers = req.body
        const newUser = await createUserService({name, email, password})
        return res.status(201).json(newUser)
    }
    catch (error) {
        if( error instanceof Error) {
            return res.status(400).json({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default createUserController