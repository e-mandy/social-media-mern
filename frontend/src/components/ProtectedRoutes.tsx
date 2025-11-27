import { useEffect } from "react";
import { useAuthStore, useIsAuthenticated } from "../features/auth/store/auth.store";
import { Outlet, Navigate } from 'react-router';
import { isLogged } from '../features/auth/api/useIsLogged';

const ProtectedRoutes = () => {
    const token = useAuthStore((state) => state.token)

    const isLogin = useIsAuthenticated((state) => state.isLogin)

    useEffect(() => {
      const is_logged = isLogged()
      console.log(is_logged);
    }, [])

  return (
    isLogin(token) ? <Outlet /> : <Navigate to="/register" />
  )
}

export default ProtectedRoutes
