import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas/index'

const register = async ({ pseudo, email, password }: RegisterUser) => {
    try{
        const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pseudo: pseudo,
                email: email,
                password: password
            })
        })
    
        return await request.json()
    }catch(err){
        console.log(err)
    }
}

export const useRegister = () => {
    return useMutation({
        mutationFn: register
    })
}