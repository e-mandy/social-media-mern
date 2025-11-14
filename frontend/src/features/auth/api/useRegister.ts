import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas/index'

const sendUser = async(data: RegisterUser) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

export const useRegister = () => {
    return useMutation({
        mutationFn: sendUser,
        onSuccess: (data) => {
            console.log(data)
        } 
    })
}