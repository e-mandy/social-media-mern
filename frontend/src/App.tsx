import Register from './features/auth/Pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <p>Piégéééé</p>
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
