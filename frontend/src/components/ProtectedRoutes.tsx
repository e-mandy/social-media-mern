import { useAuthStore, useIsAuthenticated } from "../features/auth/store/auth.store";
import { Navigate, Outlet } from "react-router";
import { useEffect } from 'react'
import { useIsLogged } from '../features/auth/api/useIsLogged'

const ProtectedRoutes = () => {
    const { user } = useAuthStore();

    const { isLogin } = useIsAuthenticated()

    const { refetch } = useIsLogged()

    useEffect( () => {
      refetch()
    }, [])

  return (
    isLogin(user) ? <Outlet /> : <Navigate to="/register" />
  )
}

export default ProtectedRoutes
