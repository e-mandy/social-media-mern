import Register from './features/auth/Pages/Register';
import Login from './features/auth/Pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './Pages/Homepage';
import { Toaster } from 'react-hot-toast';
import AppLayout from './Pages/AppLayout';
import Profile from './features/Profile/Pages/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <AppLayout />,
          children: [
            {
              path: "/home",
              element: <Homepage />
            },
            {
              path: "/profile",
              element: <Profile />
            }
          ]
        }
      ]
    }

  ]);

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
