import { useQuery } from '@tanstack/react-query'

const isLogged = async () => {

    const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/auth/isLogged`, {
        method: "GET",
        headers: {
            "Type-Content": "application/json"
        }
    })

    if(!request.ok){
        const error = await request.json();

        throw new Error(error.message);
    }

    return await request.json()
    
}

export const useIsLogged = () => {
    return useQuery({
        queryKey: ['user_logged'],
        queryFn: isLogged,
        enabled: true
    })
}