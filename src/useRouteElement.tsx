import { Suspense, lazy, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import path from './constants/path'
import MainLayout from './components/MainLayout'

const NotFound = lazy(() => import('./pages/NotFound'))
const ChatArea = lazy(() => import('./components/ChatArea'))

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '*',
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <NotFound />
        </Suspense>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <div className='h-8 w-full'>Login</div>
            </Suspense>
          )
        },
        {
          path: path.register,
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <div className='h-8 w-full'>register</div>
            </Suspense>
          )
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
                <Suspense fallback={<div>Loading</div>}>
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
