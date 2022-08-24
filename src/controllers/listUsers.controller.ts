import { Request, Response} from 'express'
import { ICreateUser, IUsers } from '../interfaces/users'
import listUserService from '../services/listUser.service'

const listUserController = async (req: Request, res: Response) => {
    try {
        const users : Array<IUsers> = await listUserService()
        return res.status(200).json(users)
    }
    catch (error){
        if(error instanceof Error) {
            return res.status(400).json({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default listUserController