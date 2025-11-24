import { useAuthStore, useIsAuthenticated } from "../features/auth/store/auth.store";
import { Outlet, Navigate } from 'react-router';

const ProtectedRoutes = () => {
    const user = useAuthStore((state) => state.user)

    const { isLogin } = useIsAuthenticated()

  return (
    isLogin(user) ? <Outlet /> : <Navigate to="/register" />
  )
}

export default ProtectedRoutes
