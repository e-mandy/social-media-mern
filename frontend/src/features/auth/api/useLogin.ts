import { useMutation } from "@tanstack/react-query"
import type { LoginUser } from "../schemas"

const login = async({ email, password }: LoginUser) => {
    try{
        const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        return await request.json()
    }catch(error){
        console.log(error)
    }
}

export const useLogin = () => {
    return useMutation({
        mutationFn: login
    })
}