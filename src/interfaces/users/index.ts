interface IUsers {
    name: string
    email: string
    password: string
}

interface ICreateUser extends IUsers{
    id: number | string
}

export { IUsers, ICreateUser }