import { useAuthStore, useIsAuthenticated } from "../features/auth/store/register.store";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
    const { user } = useAuthStore();

    const { isLogin } = useIsAuthenticated()

  return (
    isLogin(user) ? <Outlet /> : <Navigate to="/register" />
  )
}

export default ProtectedRoutes
