import { Suspense, lazy, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import path from './constants/path'
import MainLayout from './components/MainLayout'
import Loading from './components/Loading'

const NotFound = lazy(() => import('./pages/NotFound'))
const Home = lazy(() => import('./pages/Home'))
const ChatArea = lazy(() => import('./components/ChatArea'))
const RegisterForm = lazy(() => import('./components/RegisterForm'))
const LoginForm = lazy(() => import('./components/LoginForm'))

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.chatRoom} />
}

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '*',
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.home,
          element: <Home />,
          children: [
            {
              path: path.home,
              element: (
                <Suspense fallback={<Loading />}>
                  <LoginForm />
                </Suspense>
              )
            },
            {
              path: path.register,
              element: (
                <Suspense fallback={<Loading />}>
                  <RegisterForm />
                </Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            {
              path: path.chatRoom,
              element: (
                <Suspense fallback={<Loading />}>
                  <ChatArea />
                </Suspense>
              )
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}
