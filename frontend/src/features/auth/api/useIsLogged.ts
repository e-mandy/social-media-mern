import { useQuery } from '@tanstack/react-query'

const isLogged = async () => {
    try{

        const request = await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/api/auth/isLogged`, {
            method: "GET",
            headers: {
                "Type-Content": "application/json"
            }
        })
    
        return await request.json()
    }catch(err){
        console.log(err)
    }
}

export const useIsLogged = () => {
    return useQuery({
        queryKey: ['user_logged'],
        queryFn: isLogged,
        enabled: true
    })
}