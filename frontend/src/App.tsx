import Register from './features/auth/Pages/Register'
import Login from './features/auth/Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<p>Piégééééé</p>} path="/" />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
