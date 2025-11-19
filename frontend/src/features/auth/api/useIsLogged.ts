import { useQuery } from '@tanstack/react-query'

export const isLogged = async () => {
    const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/auth/isLogged`, {
        method: "GET",
        headers: {
            "Type-Content": "application/json"
        }
    })

    return await request.json()
}

const useIsLogged = () => {
    return useQuery({
        queryKey: ['']
    })
}