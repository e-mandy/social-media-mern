import { useMutation } from '@tanstack/react-query'
import type { RegisterUser } from '../schemas/index'

const register = async ({ pseudo, email, password }: RegisterUser) => {
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

    if(!request.ok){
        const error = await request.json();

        throw new Error(error.message);
    }

    return await request.json()
}

export const useRegister = () => {
    return useMutation({
        mutationFn: register,
    })
}