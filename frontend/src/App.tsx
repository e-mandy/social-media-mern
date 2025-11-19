import Register from './features/auth/Pages/Register'
import Login from './features/auth/Pages/Login'
import { Router, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'
import { createBrowserHistory } from 'history'
import Homepage from './Pages/Homepage'
import { Toaster } from 'react-hot-toast'
import AppLayout from './Pages/AppLayout'
import Profile from './features/Profile/Pages/Profile'

function App() {

  const history = createBrowserHistory()

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Router>
        <Routes>

          <Route element={<ProtectedRoutes />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Les routes publiques */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
