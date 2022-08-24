
import { ICreateUser, IUsers } from "../interfaces/users"
import { AppDataSource } from "../data-source"
import { Usuario } from "../entities/user.entity"

const createUserService = async ({name, email, password }: IUsers) => {
    const userRepository = AppDataSource.getRepository(Usuario)

    const users = await userRepository.find()
    
    const verifyEmail = users.find(user => user.email == email) 

    if(verifyEmail) {
        throw new Error('Esse e-mail já fora cadastrado anteriormente')
    }

    const user = new Usuario()
    user.name = name
    user.email = email
    user.password = password

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default createUserService