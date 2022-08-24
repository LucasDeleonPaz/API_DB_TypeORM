
interface Iuser {
    name: string
    email: string
    password: string
    dadosBancarios: IDadosBancarios
}

interface IDadosBancarios {
    numeroConta: string
    saldo: number
    abertura: Date
}