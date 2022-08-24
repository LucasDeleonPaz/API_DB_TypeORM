import { IUsers, ICreateUser } from "../interfaces/users";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/user.entity";


const listUserService = async () => {
    const userRepository = AppDataSource.getRepository(Usuario)
    const users = await userRepository.find()

    return users
}

export default listUserService