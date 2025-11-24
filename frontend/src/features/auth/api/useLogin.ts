import { useMutation } from "@tanstack/react-query"
import type { LoginUser } from "../schemas"

const login = async({ email, password }: LoginUser) => {
    const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    if(!request.ok){
        const errorBody = await request.json();
        throw new Error(errorBody.message);
    }

    return await request.json()
}

export const useLogin = () => {
    return useMutation({
        mutationFn: login
    })
}