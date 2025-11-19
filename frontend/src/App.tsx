import Register from './features/auth/Pages/Register'
import Login from './features/auth/Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'
import Homepage from './Pages/Homepage'
import { Toaster } from 'react-hot-toast'
import AppLayout from './Pages/AppLayout'
import Profile from './features/Profile/Pages/Profile'

function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <BrowserRouter>
        <Routes>

          <Route element={<ProtectedRoutes />}>
            <Route element={<AppLayout />}>
              <Route element={<Homepage />} path="/" />
              <Route element={<Profile />} path="/profile" />
            </Route>
          </Route>

          {/* Les routes publiques */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
