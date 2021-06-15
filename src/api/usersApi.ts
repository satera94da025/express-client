import axios from 'axios'

const instance = axios.create({baseURL: `http://localhost:5000/api/users`})

export type ResponseType = {
    id: string
    name: string
    message: string
    date: any
}
export const UsersApi = {
    getUsers(value: number) {
        return instance.get<Array<ResponseType>>(`?last_n_messages=${String(value)}`)
    },
}

