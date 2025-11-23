import { useAuthStore, useIsAuthenticated } from "../features/auth/store/auth.store";
import { useEffect } from 'react'
import { useIsLogged } from '../features/auth/api/useIsLogged'

const ProtectedRoutes = () => {
    const { user, login } = useAuthStore();

    const { isLogin } = useIsAuthenticated()

    const { refetch, data } = useIsLogged()

    useEffect( () => {
      refetch()
      login(data)

    }, [])

  return (
    isLogin(user) ? <Outlet /> : <Navigate to="/register" />
  )
}

export default ProtectedRoutes
